import { Blog } from "../Models/bolg.js";

export const createblog = async (req, res) => {
  const { title, description, imgeurl } = req.body;

  await Blog.create({ title, description, imgeurl, user: req.user });
  res.json({
    success: true,
    message: "blog add succecfull",
  });
};

export const myblog = async (req, res) => {
  const userid = req.user._id;
  const blogs = await Blog.find({ user: userid });
  res.json({
    success: true,
    message: "fetched all blog",
    blogs,
  });
};
export const updateblog = async (req, res) => {
  const { title, description, imgeurl } = req.body;
  const id = req.params.id;
  const blog = await Blog.findById(id);
  if (!blog)
    return res.json({
      success: false,
      message: "invalid id",
    });
  blog.title = title;
  blog.description = description;
  blog.imgeurl = imgeurl;
  res.json({
    success: true,
    message: "updating blog",
  });
};
export const deleteblog = async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  if (!blog)
    return res.json({
      success: false,
      message: "invalid id",
    });
  await blog.deleteOne();
  res.json({
    success: true,
    message: "blog delete",
  });
};
