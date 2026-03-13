import { Blog } from "../Models/bolg.js";

export const createblog = async (req, res) => {
  const { title, description, imageurl } = req.body;

  await Blog.create({
    title,
    description,
    imageurl,
    user: req.user,
  });

  res.json({
    success: true,
    message: "blog added successfully",
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
  const { title, description, imageurl } = req.body;
  const id = req.params.id;

  const blog = await Blog.findById(id);

  if (!blog)
    return res.json({
      success: false,
      message: "invalid id",
    });

  blog.title = title;
  blog.description = description;
  blog.imageurl = imageurl;

  await blog.save();

  res.json({
    success: true,
    message: "blog updated",
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
    message: "blog deleted",
  });
};
