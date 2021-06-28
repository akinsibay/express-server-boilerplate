import express from "express";
import users from "./users";
const router = express.Router();

/* GET home page. */
router.get('/', (req,res) => {
  res.send("Welcome to Express server");
});

router.use("/users", users);

export default router;
