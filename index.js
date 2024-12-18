import express from "express";
import db from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js"
import bodyParser from "body-parser";

const app = express();

app.use(express.json())
app.use(bodyParser.json())


app.use("/admin", adminRoutes)

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});