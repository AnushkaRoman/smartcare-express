const express = require("express");

const router = express.Router();

const appointmentController =
    require("../controllers/appointmentController");

// =================================
// GET - Display appointment form
// =================================

router.get("/", appointmentController.showForm);

// =================================
// POST - Submit appointment
// =================================

router.post(
    "/appointments",
    appointmentController.createAppointment
);

module.exports = router;