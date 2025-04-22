import express from "express";
import { connectDB } from "./config/database.js";
import authRouter from "./routes/auth.js";
const app = express();
const port = 7777;

app.use(express.json());
app.use("/", authRouter);
connectDB()
  .then(() => {
    console.log("Database Connection Established...");
    app.listen(port, () =>
      console.log(`server is successfully listening on port ${port}!`)
    );
  })
  .catch((err) => {
    console.error("Database CANNOT Be connected");
  });
