import express from 'express';
import fs from 'fs'
const router = express.Router();

app.use((req, res, next) => {
  fs.appendFileSync("logBlog.txt", `The type of request on ${new Date().toLocaleString("en-IN")} is a ${req.method}\n`)
  next()
})
// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page');
});
// define the about route
router.get('/about', (req, res) => {
  res.send('About blogs');
});
router.get('/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}!`);
});

export default router;