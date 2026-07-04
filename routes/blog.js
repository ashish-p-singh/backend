import express from 'express';

const router = express.Router();

const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now());
  next();
};
router.use(timeLog);
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