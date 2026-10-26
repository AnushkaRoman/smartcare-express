const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// ===============================
// Middleware
// ===============================

// Read form data
app.use(express.urlencoded({ extended: true }));

// Read JSON data
app.use(express.json());

// Serve CSS and JavaScript files
app.use(express.static(path.join(__dirname, "public")));

// ===============================
// EJS Configuration
// ===============================

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ===============================
// Routes
// ===============================

const appointmentRoutes = require("./routes/appointmentRoutes");

app.use("/", appointmentRoutes);

// ===============================
// 404 Error Handler
// ===============================

app.use((req, res) => {
    res.status(404).render("404");
});

// ===============================
// Start Server
// ===============================

app.listen(PORT, () => {
    console.log(`SmartCare server is running at http://localhost:${PORT}`);
});