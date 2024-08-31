// Initialize EmailJS
emailjs.init('kntRuspsPt_JNnnBr'); // Replace with your EmailJS User ID

// Bottom nav button functionality
const buttons = document.querySelectorAll('.bottom-nav button');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'flex';
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

// Email form submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_hv8h2do', 'template_4y4y0er', this)
        .then(function(response) {
            alert('Booking successful! We will contact you shortly.');
            document.getElementById('booking').style.display = 'none';
        }, function(error) {
            alert('An error occurred. Please try again.');
        });
});
