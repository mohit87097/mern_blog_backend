import jwt from "jsonwebtoken";

export const generatecookie = (user, res, message) => {
  const token = jwt.sign({ _id: user._id }, "52!%&");
  console.log(token);
  res
    .cookie("token", token, {
      httponly: true,
      maxAge: 10 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Develpoment" ? false : true,
    })
    .json({
      success: true,
      message,
      user,
    });
};
