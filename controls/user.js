import { User } from "../Models/user.js";
import bcrypt from "bcrypt";

import { generatecookie } from "../utils/features.js";

export const userregister = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user)
    return res.json({
      user: "user exit",
    });
  const hashpassword = await bcrypt.hash(password, 10);
  user = await User.create({
    name,
    email,
    password: hashpassword,
  });
  generatecookie(user, res, "user register succeful");
};

export const userlogin = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user)
    return res.json({
      success: false,
      message: "user not exit register first",
    });

  const ismatch = await bcrypt.compare(password, user.password);
  if (!ismatch)
    return res.json({
      success: false,
      massage: "email and password not match",
    });
  generatecookie(user, res, "user login succeful");
};

export const userlogout = async (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "logout  succecfully!",
    });
};

export const getmyprofile = (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
};

export const getUserById = async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id);

  if (!user)
    return res.status(404).json({
      success: false,
      message: "Invalid ID",
    });

  res.json({
    success: true,
    message: "This is single user",
    user,
  });
};
