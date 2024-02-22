const otpGenerator = require("otp-generator");
const OTP = require("../models/otpSchema");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const sendOTP = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        res.status(400).send({
          status: false,
          message: "Password is wrong",
        });
      }
      if (validPassword) {
        let otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          lowerCaseAlphabets: false,
          specialChars: false,
        });
        let result = await OTP.findOne({ otp: otp });
        while (result) {
          otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
          });
          result = await OTP.findOne({ otp: otp });
        }
        const otpBody = await OTP.create({
          email: email,
          otp: otp,
        });
        res.status(200).json({
          success: true,
          message: "OTP sent successfully",
          user: user,
          email: email,
          otp: otp,
          token: generateToken(user._id, user.role),
        });
      }
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

const sendOTPRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const image = req.file.filename;

    console.log(req.file);

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

    //Generating OTP
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await OTP.findOne({ otp: otp });
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
      result = await OTP.findOne({ otp: otp });
    }

    //Creating user
    const userData = await User.create({
      name: name,
      email: email,
      password: hanshedPassword,
      image: image,
    });

    const otpBody = await OTP.create({
      email: email,
      otp: otp,
    });
    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otpBody,
      name: name,
      email: email,
      image: image,
      token: generateToken(userData._id, userData.role),
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { otp, email } = req.body;
    const user = await User.findOne({ email });

    const response = await OTP.findOne({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    if (!response) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }
    if (otp !== response.otp) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    return res.status(200).json({
      success: true,
      message: "The OTP is  valid",
      user: user,
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  sendOTP,
  sendOTPRegister,
  verifyOTP,
};
