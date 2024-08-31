// Initialize EmailJS
emailjs.init('kntRuspsPt_JNnnBr'); // Replace with your EmailJS User ID

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Email form submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_hv8h2do', 'template_4y4y0er', this)
        .then(function(response) {
            alert('Booking successful! We will contact you shortly.');
        }, function(error) {
            alert('An error occurred. Please try again.');
        });
});
