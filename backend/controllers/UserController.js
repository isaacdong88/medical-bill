const User = require("../models/user");
const Bills = require("../models/bills");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Login user, route Post /user/login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: genToken(user._id),
        accountType: user.accountType,
      });
    } else {
      res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(400).json({ message: "Missing login info" });
  }
};

//Create user, route Post /user
const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      res.status(400).json({ message: "Please fill in all fields" });
    } else {
      //hass password
      const salt = await bcrypt.genSalt(10);
      const hassedPassword = await bcrypt.hash(password, salt);
      const createUser = await User.create({
        username: username,
        password: hassedPassword,
        email: email,
      });
      res.status(201).json({
        _id: createUser.id,
        username: createUser.username,
        email: createUser.email,
        token: genToken(createUser._id),
        accountType: createUser.accountType,
      });
    }
  } catch (error) {
    res.status(400).json({ message: "User already exists" });
  }
};

//get user bills, route Get /user/bills/:id
const userBills = async (req, res) => {
  try {
    const userReviews = await Bills.find({ user: req.params.id });
    res.status(200).json(userReviews);
  } catch (error) {
    res.status(400).json({ message: "No reviews" });
  }
};

//Delete user, route Delete /user/:id
const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndRemove(req.params.id);
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
};

//Generate token
const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  loginUser,
  createUser,
  deleteUser,
  userBills,
};
