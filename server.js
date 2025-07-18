const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoutes = require("./Routes/productRoutes");
const authRoutes = require("./Routes/authRountes");
const PORT = 3000;
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Server is running",
  });
});

app.use("/Product", productRoutes);

app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGODOB_URL)
  .then(() => {
    console.log("connected to MongoDB successfully");

    app.listen(PORT, () => {
      console.log("Server is running fine and good");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB");
    console.log(err.message);
  });
