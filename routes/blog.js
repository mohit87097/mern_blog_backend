import express from "express";
import {
  createblog,
  myblog,
  deleteblog,
  updateblog,
} from "../controls/blog.js";
import { isauthencat } from "../middlewares/auth.js";
const router = express.Router();

router.post("/new", isauthencat, createblog);
router.get("/myblog", isauthencat, myblog);
router.put("/:id", isauthencat, updateblog);
router.delete("/:id", isauthencat, deleteblog);
// router.get("/", (req, res) => {
//   res.json({
//     message: "blog api",
//   });
// });
export default router;
