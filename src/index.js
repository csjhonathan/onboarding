import express from "express";
import httpStatus from "http-status";
import indexRouter from "./routes/index.routes.js";
const app = express();
const port = process.env.PORT || 5000;

app.use(indexRouter)

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
});