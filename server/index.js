const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const userRoute = require("./routes/add");
app.use(cors());
app.use(express.json());
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

mongoose.set("strictQuery", false);
// mongodb+srv://yash123:Abhinay%4012345@cluster0.noakp1i.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected mongodb");
    }
  }
);
 
app.get("/", (req, res) => {
  res.send("welcome to mongodb API");
});

app.use("/api/user/", userRoute);
app.use("/api/auth/", authRoute);

app.listen(5000, () => {
  console.log("backend server is running");
});
