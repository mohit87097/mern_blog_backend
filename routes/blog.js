import express from "express";
import {
  createblog,
  myblog,
  deleteblog,
  updateblog,
  getallblog,
  getblogbyid,
  getuserbyid,
} from "../controls/blog.js";
import { isauthencat } from "../middlewares/auth.js";
const router = express.Router();

router.post("/new", isauthencat, createblog);
router.get("/myblog", isauthencat, myblog);
router.put("/:id", isauthencat, updateblog);
router.delete("/:id", isauthencat, deleteblog);
router.get("/allblogs", getallblog);
router.get("/blog/:id", isauthencat, getblogbyid);
router.get("/:id", getuserbyid);

export default router;
