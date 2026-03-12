import express from "express";
import {
  userregister,
  userlogin,
  getmyprofile,
  userlogout,
} from "../controls/user.js";
import { isauthencat } from "../middlewares/auth.js";
const router = express.Router();
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "we are in home route",
  });
});
router.post("/register", userregister);
router.post("/login", userlogin);

router.get("/logout", userlogout);
router.get("/my", isauthencat, getmyprofile);

export default router;
