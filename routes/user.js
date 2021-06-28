import express from "express";
const router = express.Router();

/* GET users listing. */
router.get('/', (req,res) => {
  res.send('respond with a resource');
});
router.post('/login', (req,res) => {
  console.log(req.body);
  res.send('login request');
});

export default router;
