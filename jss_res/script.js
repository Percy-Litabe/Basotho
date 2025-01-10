const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



//---Contact form---

const serviceID = 'service_wy59r8i';
const templateID = 'template_u7sczcl'; 
const publicKey = 'cPmVgtOm1WD93Efv3';

(function(){
    emailjs.init(publicKey); // Replace with your EmailJS user ID
})();

// Get the form element
const form = document.getElementById("contact-form");

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare the email data
    const templateParams = {
        user_name: name,
        user_email: email,
        message: message,
    };

    // Send the email via EmailJS
    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log("Success:", response);
            // Show feedback message to the user
            alert("Thank you for your message! We will get back to you soon.")
            // Optionally reset the form
            form.reset();
        }, function(error) {
            console.log("Error:", error);
            alert("Oops! Something went wrong, please try again later.");
        });
});

// Counter for clients and staff.
function countStaff() {
    const counterElements = document.querySelectorAll('.employee-client .counts h6 span');
    const wrapper = document.querySelector('.counter-wrapper');
    let hasCounted = false;

    function updateCount(counter) {
        let count = 0;
        const target = parseInt(counter.dataset.count);
        
        function increment() {
            if (count < target) {
                count++;
                counter.innerText = count;
                requestAnimationFrame(increment); // Using requestAnimationFrame for smooth updates
            } else {
                counter.innerText = target;
            }
        }
        increment();
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const wrapperOffset = wrapper.offsetTop;
        const wrapperHeight = wrapper.offsetHeight;

        // Trigger the count animation when scrolled into view
        if (scrollPosition > wrapperOffset - wrapperHeight - 150 && !hasCounted) {
            counterElements.forEach(counter => {
                counter.innerText = 0; // Reset the counter before starting
                updateCount(counter);
            });
            hasCounted = true; // Set the flag to prevent re-triggering
        }
    });
}

countStaff();

// Responsive navigation bar
function showRespNav() {
    const sideNav = document.querySelector('.resp_navbar')
    const btn = document.querySelector('.resp_navbar .call-btn')

    sideNav.style.display = 'flex'
    btn.style.display = 'block'
}

function hideRespNav() {
    const sideNav = document.querySelector('.resp_navbar')
    sideNav.style.display = 'none'
}
// End responsive navigation bar

//Frequently asked question dropdwon
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.closest('.list-ques').querySelector('.ans');
        const icon = this.querySelector('i');
        const crrntDisp = window.getComputedStyle(answer).display;

        if (crrntDisp === 'none') {
            answer.style.display = 'block';
            icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
        } else {
            answer.style.display = 'none';
            icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
        }
    })
})