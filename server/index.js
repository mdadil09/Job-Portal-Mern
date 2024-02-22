const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const jobsRoutes = require("./routes/jobs");
const userRoutes = require("./routes/users");
const multer = require("multer");
const path = require("path");
const { sendOTPRegister } = require("./controllers/auth");
const { applyJob } = require("./controllers/userInfo");
const adminRoutes = require("./routes/adminRoutes");
const adminAuthRoutes = require("./routes/adminAuth");
const { adminRegister } = require("./controllers/adminAuth");
const protect = require("./middlewares/auth");
const { isUser } = require("./middlewares/userType");
const helmet = require("helmet");
const JobsData = require("./models/jobSchema");
const fetchapi = require("./utils/api");

//configuration:

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use(cors());

//File Storage

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
app.post("/api/user/send-otp-register", upload.single("file"), sendOTPRegister);
app.post(
  "/api/jobs/applyjob",
  protect,
  isUser,
  upload.single("file"),
  applyJob
);
app.post("/api/admin/auth/register", adminRegister);

//Routes

app.use("/api/jobs", jobsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/admin/auth", adminAuthRoutes);

//Enviroment Variables

const PORT = process.env.PORT || 5701;

//Database Connection
// fetchapi();
connectDB();
// const delteJob = async () => {
//   const result = await JobsData.deleteMany();
//   return result;
// };

// delteJob();

//Creating express server

app.listen(PORT, () => {
  console.log(`Server is litening on ${PORT}`);
});
