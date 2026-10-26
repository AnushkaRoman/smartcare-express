function validateAppointment(data) {

    const errors = {};

    const {
        name,
        email,
        phone,
        age,
        department,
        appointmentDate,
        reason
    } = data;

    // =================================
    // NAME VALIDATION
    // =================================

    if (!name || name.trim() === "") {

        errors.name = "Full name is required.";

    } else if (!/^[A-Za-z ]+$/.test(name.trim())) {

        errors.name =
            "Name can contain only letters and spaces.";

    } else if (name.trim().length < 3) {

        errors.name =
            "Name must contain at least 3 characters.";
    }


    // =================================
    // EMAIL VALIDATION
    // =================================

    if (!email || email.trim() === "") {

        errors.email = "Email address is required.";

    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {

        errors.email =
            "Please enter a valid email address.";
    }


    // =================================
    // PHONE VALIDATION
    // =================================

    if (!phone || phone.trim() === "") {

        errors.phone = "Phone number is required.";

    } else if (!/^[0-9]{10}$/.test(phone.trim())) {

        errors.phone =
            "Phone number must contain exactly 10 digits.";
    }


    // =================================
    // AGE VALIDATION
    // =================================

    if (!age || age.toString().trim() === "") {

        errors.age = "Age is required.";

    } else {

        const numericAge = Number(age);

        if (
            !Number.isInteger(numericAge) ||
            numericAge < 1 ||
            numericAge > 120
        ) {

            errors.age =
                "Age must be a whole number between 1 and 120.";
        }
    }


    // =================================
    // DEPARTMENT VALIDATION
    // =================================

    const validDepartments = [
        "General Medicine",
        "Cardiology",
        "Dermatology",
        "Orthopedics",
        "Pediatrics"
    ];

    if (!validDepartments.includes(department)) {

        errors.department =
            "Please select a valid department.";
    }


    // =================================
    // APPOINTMENT DATE VALIDATION
    // =================================

    if (!appointmentDate) {

        errors.appointmentDate =
            "Appointment date is required.";

    } else {

        const selectedDate =
            new Date(appointmentDate);

        const today = new Date();

        today.setHours(0, 0, 0, 0);

        if (
            isNaN(selectedDate.getTime())
        ) {

            errors.appointmentDate =
                "Please enter a valid appointment date.";

        } else if (selectedDate < today) {

            errors.appointmentDate =
                "Appointment date cannot be in the past.";
        }
    }


    // =================================
    // REASON VALIDATION
    // =================================

    if (!reason || reason.trim() === "") {

        errors.reason =
            "Reason for visit is required.";

    } else if (reason.trim().length < 10) {

        errors.reason =
            "Reason must contain at least 10 characters.";

    } else if (reason.trim().length > 500) {

        errors.reason =
            "Reason cannot exceed 500 characters.";
    }


    return errors;
}

module.exports = validateAppointment;