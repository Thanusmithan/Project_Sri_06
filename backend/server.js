// // server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db"); // Database connection file
// const authRoutes = require("./routes/authRoutes");
// const appointmentRoutes = require("./routes/appointmentRoutes"); // Appointment routes
// const serviceRoutes = require("./routes/serviceRoutes"); // Service routes
// const userRoutes = require("./routes/userRoutes"); // User routes
// const cors = require("cors");
// const User = require("./models/User");
// const bcrypt = require("bcryptjs");

// dotenv.config(); // Load environment variables

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors()); // Enable CORS
// app.use(express.json()); // Parse JSON request bodies

// // Seed the admin user if it doesn't exist
// const seedAdminUser = async () => {
//     try {
//         const existingAdmin = await User.findOne({ email: "admin@hospital.com" });
//         if (!existingAdmin) {
//             const hashedPassword = await bcrypt.hash("admin123", 10);
//             const admin = new User({
//                 firstName: "Admin",
//                 lastName: "User",
//                 email: "admin@hospital.com",
//                 phone: "0000000000",
//                 password: hashedPassword,
//                 role: "admin"
//             });
//             await admin.save();
//             console.log("Admin user created successfully");
//         } else {
//             console.log("Admin user already exists");
//         }
//     } catch (error) {
//         console.error("Error seeding admin user:", error);
//     }
// };

// // Run the seed function to ensure admin exists
// seedAdminUser();

// // Routes
// app.use("/api/auth", authRoutes); // Authentication routes
// app.use("/api/appointments", appointmentRoutes); // Appointment routes
// app.use("/api/services", serviceRoutes); // Service routes
// app.use("/api/users", userRoutes); // User routes

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// //Server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db"); // Database connection file
// const cors = require("cors");
// const morgan = require("morgan"); // For logging HTTP requests
// const User = require("./models/User");
// const bcrypt = require("bcryptjs");

// // Import Routes
// const authRoutes = require("./routes/authRoutes");
// const appointmentRoutes = require("./routes/appointmentRoutes");
// const serviceRoutes = require("./routes/serviceRoutes");
// const userRoutes = require("./routes/userRoutes");

// dotenv.config(); // Load environment variables

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors()); // Enable CORS
// app.use(express.json()); // Parse JSON request bodies
// app.use(morgan("dev")); // Log HTTP requests

// // Seed the admin user if it doesn't exist
// const seedAdminUser = async () => {
//   try {
//     const existingAdmin = await User.findOne({ email: "admin@hospital.com" });
//     if (!existingAdmin) {
//       const hashedPassword = await bcrypt.hash("admin123", 10);
//       const admin = new User({
//         firstName: "Admin",
//         lastName: "User",
//         email: "admin@hospital.com",
//         phone: "0000000000",
//         password: hashedPassword,
//         role: "admin",
//       });
//       await admin.save();
//       console.log("Admin user created successfully");
//     } else {
//       console.log("Admin user already exists");
//     }
//   } catch (error) {
//     console.error("Error seeding admin user:", error.message);
//   }
// };

// // Run the seed function to ensure admin exists
// seedAdminUser();

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/appointments", appointmentRoutes);
// app.use("/api/services", serviceRoutes);
// app.use("/api/users", userRoutes);

// // Default route for health check
// app.get("/", (req, res) => {
//   res.status(200).send({ message: "API is running successfully" });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(`Error: ${err.message}`);
//   res.status(err.status || 500).json({
//     success: false,
//     error: err.message || "Server Error",
//   });
// });

// // Handle 404 errors
// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     error: "API route not found",
//   });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// //server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db"); // Database connection file
// const cors = require("cors");
// const morgan = require("morgan"); // For logging HTTP requests
// const bcrypt = require("bcryptjs");
// const User = require("./models/User");

// // Import Routes
// const authRoutes = require("./routes/authRoutes");
// const appointmentRoutes = require("./routes/appointmentRoutes");
// const serviceRoutes = require("./routes/serviceRoutes");
// const userRoutes = require("./routes/userRoutes");
// const stockRoutes = require("./routes/stockRoutes"); // Add Stock routes

// // Load environment variables
// dotenv.config();

// // Initialize Express app
// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors()); // Enable CORS for all origins
// app.use(express.json()); // Parse incoming JSON request bodies
// app.use(morgan("dev")); // Log HTTP requests in development

// // Seed the admin user if it doesn't exist
// const seedAdminUser = async () => {
//   try {
//     const existingAdmin = await User.findOne({ email: "admin@hospital.com" });
//     if (!existingAdmin) {
//       const hashedPassword = await bcrypt.hash("admin123", 10);
//       const admin = new User({
//         firstName: "Admin",
//         lastName: "User",
//         email: "admin@hospital.com",
//         phone: "0000000000",
//         password: hashedPassword,
//         role: "admin",
//       });
//       await admin.save();
//       console.log("Admin user created successfully");
//     } else {
//       console.log("Admin user already exists");
//     }
//   } catch (error) {
//     console.error("Error seeding admin user:", error.message);
//   }
// };

// // Run the seed function to ensure admin exists
// seedAdminUser();

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/appointments", appointmentRoutes);
// app.use("/api/services", serviceRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/stocks", stockRoutes); // Add Stock routes

// // Default route for health check
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "API is running successfully" });
// });

// // Global error handling middleware
// app.use((err, req, res, next) => {
//   console.error(`Error: ${err.message}`);
//   res.status(err.status || 500).json({
//     success: false,
//     error: err.message || "Server Error",
//   });
// });

// // Handle 404 errors for undefined routes
// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     error: "API route not found",
//   });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db"); // Database connection file
const cors = require("cors");
const morgan = require("morgan"); // For logging HTTP requests
const bcrypt = require("bcryptjs");
const User = require("./models/User");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const userRoutes = require("./routes/userRoutes");
const stockRoutes = require("./routes/stockRoutes"); // Add Stock routes

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse incoming JSON request bodies
app.use(morgan("dev")); // Log HTTP requests in development

// Seed the admin user if it doesn't exist
const seedAdminUser = async () => {
  try {
    const existingAdmin = await User.findOne({ email: "admin@hospital.com" });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      const admin = new User({
        firstName: "Admin",
        lastName: "User",
        email: "admin@hospital.com",
        phone: "0000000000",
        password: hashedPassword,
        role: "admin",
      });
      await admin.save();
      console.log("Admin user created successfully");
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.error("Error seeding admin user:", error.message);
  }
};

// Run the seed function to ensure admin exists
seedAdminUser();

// API Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/appointments", appointmentRoutes); // Appointment routes
app.use("/api/services", serviceRoutes); // Service routes
app.use("/api/users", userRoutes); // User management routes
app.use("/api/stocks", stockRoutes); // Stock management routes

// Default route for health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running successfully" });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || "Server Error",
  });
});

// Handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "API route not found",
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});