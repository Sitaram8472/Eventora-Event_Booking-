// package
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

// import data
const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/events");
const bookingRoutes = require("./routes/bookings");

dotenv.config();
const app = express();
app.use(cors());
// for json data
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

// connect to mongodb
main()
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("Error connecting in database:", error);
  });

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is started on port ${PORT}`);
});
