import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Routers
import userrouter from "./routers/User.js";
import productrouter from "./routers/product.js";
import cartrouter from "./routers/ritik.js";
import Addressrouter from "./routers/Address.js";
import paymentrouter from "./routers/payment.js";

const app = express();


// ================= MIDDLEWARE =================

// JSON Middleware
app.use(express.json());


// ================= CORS FIX =================

const allowedOrigins = [
  "https://ritikjain6521-find-a-repository-eco.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {

      // allow requests with no origin
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS Not Allowed"));
      }
    },

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

    credentials: true,

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);


// HANDLE PREFLIGHT REQUESTS
app.options("*", cors());


// ================= ROUTES =================

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend Working Fine",
  });
});


// API Routes
app.use("/api/user", userrouter);
app.use("/api/product", productrouter);
app.use("/api/cart", cartrouter);
app.use("/api/address", Addressrouter);
app.use("/api/payment", paymentrouter);


// ================= DATABASE =================

mongoose
  .connect(
    "mongodb+srv://ritikjain6224:qJvYokUpFBZr3sub@cluster0.z6rba.mongodb.net/MERN_E_Commerce"
  )
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });


// ================= SERVER =================

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
