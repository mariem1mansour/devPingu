import express from "express";
import { validateSignUpData } from "../utils/validation.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";
const authRouter = express.Router();




// ==Sign Up
authRouter.post("/signup", async (req, res) => {
  try {
    // ^ Validation of data
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;
    //! Encrypt of password
    const passwordHash = await bcrypt.hash(password, 10);
    //~ Creating new instance of the user model (create and save the user)
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    const savedUser = await user.save();
    res.status(201).json({ message: "user added successfully" });
  } catch (err) {
    res.status(400).json("ERROR: " + err.message);
  }
});
export default authRouter ;