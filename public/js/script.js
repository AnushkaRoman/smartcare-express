// =========================================
// SmartCare Client-Side UI Enhancements
// =========================================

// Automatically set the minimum appointment date
// to today's date.

const appointmentDate =
    document.getElementById("appointmentDate");

if (appointmentDate) {

    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        String(today.getMonth() + 1)
            .padStart(2, "0");

    const day =
        String(today.getDate())
            .padStart(2, "0");

    const todayString =
        `${year}-${month}-${day}`;

    appointmentDate.min = todayString;
}