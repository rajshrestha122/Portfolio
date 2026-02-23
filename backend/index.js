import express from "express";
import dotoenv from "dotenv";
import formRouter from "./routes/form.route.js";
import connectDb from "./connectDb.js";
import cors from "cors";
const app = express();
dotoenv.config();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.use("/api", formRouter);



connectDb();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
}       );