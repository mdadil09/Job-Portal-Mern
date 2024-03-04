const User = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const adminRegister = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const imagePath = req.file.filename;

    //hashing Password
    const salt = await bcrypt.genSalt(10);
    const hanshedPassword = await bcrypt.hash(password, salt);

    //Checking User Filling all details or not
    if (!name || !email || !password) {
      res.status(401).send("Please fill required field");
    }

    // Checking User Exists or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(500).send("User already exist");
    }

    //Creating user
    const userData = await User.create({
      name: name,
      email: email,
      password: hanshedPassword,
      image: imagePath,
      role: role,
    });

    res.status(200).json({
      success: true,
      message: "Admin Account created successfully",
      name: name,
      email: email,
      image: imagePath,
      token: generateToken(userData._id, userData.role),
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    //Checking if user is exist or not
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        res.status(400).send({
          status: false,
          message: "Password is wrong",
        });
      }
      res.status(200).json({
        user: user,
        token: generateToken(user._id, user.role),
      });
    } else {
      res.status(400).send({
        success: false,
        message: "User doesn't exist!",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  adminRegister,
  adminLogin,
};
