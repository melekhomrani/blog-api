const router = require('express').Router();
const {
  blog_get,
  blog_get_one,
  blog_create_get,
  blog_post,
  blog_delete,
} = require('../controllers/blogController');

//
router.get('/', (req, res) => {
  res.redirect('/blogs');
});

router.get('/blogs', blog_get);

router.get('/blogs/:id', blog_get_one);

router.get('/blogs_create', blog_create_get);

router.post('/blogs', blog_post);

router.delete('/blogs/:id', blog_delete);

router.get('/about', (req, res) => {
  let context = { title: 'About' };
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render('about', context);
});

module.exports = router;
