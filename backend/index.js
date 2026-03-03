import express from "express";
import dotoenv from "dotenv";
import cors from "cors";
import formRouter from "./routes/form.route.js";
import connectDb from "./connectDb.js";
import loginRouter from "./routes/admin.route.js";
import Admin from "./admin.model.js";
const app = express();
dotoenv.config();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello, World!");
});


app.use("/api", formRouter);
app.use("/api", loginRouter);

// app.use("api/",);




connectDb();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
}       );