const validateAppointment =
    require("../validators/appointmentValidator");

// =================================
// Display Appointment Form
// =================================

exports.showForm = (req, res) => {

    res.render("index", {
        errors: {},
        formData: {}
    });

};

// =================================
// Create Appointment
// =================================

exports.createAppointment = (req, res) => {

    const formData = req.body;

    // Validate form data
    const errors = validateAppointment(formData);

    // If validation errors exist
    if (Object.keys(errors).length > 0) {

        return res.status(400).render("index", {
            errors: errors,
            formData: formData
        });

    }

    // If everything is valid
    res.status(200).render("success", {
        appointment: formData
    });

};