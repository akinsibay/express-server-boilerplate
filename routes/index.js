import express from "express";
import user from "./user";
const router = express.Router();

/* GET home page. */
router.get('/', (req,res) => {
  res.render('index', { title: 'Express' });
});

router.use("/user", user);

export default router;
