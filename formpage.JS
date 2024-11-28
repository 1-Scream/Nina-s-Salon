document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = document.getElementById('service').value;

    // Simple validation
    if (!name || !email || !phone || !date || !time || !service) {
        alert('Please fill in all fields.');
        return;
    }

    // Display a confirmation message
    alert(`Appointment booked successfully!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nService: ${service}`);
});