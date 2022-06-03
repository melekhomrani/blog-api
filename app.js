const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const blogRouter = require("./routers/blogRouter");
const port = 3000;

// set database 
mongoose
  .connect("mongodb://localhost/Chats", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // run app on port only when connected to database
    app.listen(port, () => console.log(`app is running on ${port}`));
    console.log("successfully connected");
  })
  .catch((e) => console.log(e));

// set ejs ad a viw engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// app.use(express.json());
app.use(blogRouter);

// render error page
app.use((req, res) => {
  let context = { title: "Error" };
  res.status(404).render("404", context);
});
