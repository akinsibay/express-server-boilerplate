/* eslint-disable no-undef */
import cookieParser from "cookie-parser";
import createError from "http-errors";
import express from "express";
import path from "path";
import dotenv from "dotenv";
import routers from "./routes";
import logger from "morgan";
import cors from 'cors'
import customErrorHandler from "./middlewares/error/customErrorHandler";
const app = express();

//Enviroment Variables
dotenv.config({
  path:"./config/env/config.env"
})
const PORT = process.env.PORT || 5000;

//app.use(headerAccessControl);
app.use(logger('dev'));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.urlencoded({ extended: false }));

app.use('/', routers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(customErrorHandler);

app.listen(PORT, () => {
  console.log(`App started on ${PORT}: ${process.env.NODE_ENV} `);
})

export default app;
