const Blog = require("../modules/Blogs");

function blog_get(req, res) {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render("blog/index", { title: "Home", blogs });
    })
    .catch((e) => console.log(e));
}

function blog_get_one(req, res) {
  let id = req.params.id;
  Blog.findById(id)
    .then((blog) => {
      res.render("blog/details", { title: "details", blog: blog });
    })
    .catch((e) => {
      console.log("there is an error");
      res.status(404).render("404", { title: "blog not found" });
    });
}

function blog_create_get(req, res) {
  let context = { title: "Create Blog" };
  res.render("blog/create", context);
}

function blog_post(req, res) {
  let data = req.body;
  const blog = new Blog({
    name: data.name,
    snippet: data.snippet,
    body: data.body,
  });
  blog
    .save()
    .then(console.log("blog created"))
    .catch((e) => console.log("blog cannot be created"));
  res.redirect("/blogs");
}

function blog_delete(req, res) {
  let id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "blog not found" });
    });
}

module.exports = {
  blog_get,
  blog_get_one,
  blog_create_get,
  blog_post,
  blog_delete,
};
