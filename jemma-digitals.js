window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const sideMenu = document.getElementById('sidemenu');
const overlay = document.getElementById('overlay');
const body = document.body;

function openmenu() {
    sideMenu.style.right = "0";
    overlay.style.display = "block";
    body.classList.add('no-scroll');
}

function closemenu() {
    sideMenu.style.right = "-300px";
    overlay.style.display = "none";
    body.classList.remove('no-scroll');
    body.style.filter = "none";
}

overlay.addEventListener('click', closemenu);



const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        // Remove the 'active' class from all accordions
        accordions.forEach((item) => {
            if (item !== accordion) {
                item.classList.remove('active');
            }
        });
        // Toggle the 'active' class on the clicked accordion
        accordion.classList.toggle('active');
    });
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        // Remove the 'active' class from all accordions
        faqs.forEach((item) => {
            if (item !== faq) {
                item.classList.remove('active');
            }
        });
        // Toggle the 'active' class on the clicked accordion
        faq.classList.toggle('active');
    });
});


/*const contactForm = document.getElementById('applicationForm'),
      contactMessage = document.getElementById('contact-message'),
      application = document.getElementById('form_container');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_km7balj', 'template_uz9rorp', '#applicationForm', 'Cshuz3q2Ul1WqyboJ')
    .then(() => {
        application.style.display = 'none';  // Hide the form
        contactMessage.style.display = 'block'; // Show the message

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.textContent = ''; // Clear the message text
        }, 5000);

        contactForm.reset();
    })
    .catch((error) => {
        contactMessage.style.display = 'block'; // Show the message
        contactMessage.innerHTML = '<img src="images/error.png" alt="Error"><span>Failed to send application. Please try again later.</span>';

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.innerHTML = ''; // Clear the message text
        }, 5000);
    });
};

contactForm.addEventListener('submit', sendEmail);*/


// script.js
let scheduleCall = {
    date: '',
    time: ''
};

renderSchedule();

function renderSchedule() {
    const { date, time } = scheduleCall;
    const scheduleCallHTML = date && time ? `<p>${date} at ${time}</p>` : '<p>No schedule set.</p>';
    document.querySelector('.js-schedule').innerHTML = scheduleCallHTML;
}

function addDate(event) {
    const inputElement = document.querySelector('.js-date-input');
    const date = inputElement.value;

    const timeInputElement = document.querySelector('.js-time-input');
    const time = timeInputElement.value;

    if (date && time) {
        scheduleCall = { date, time };

        inputElement.value = '';
        timeInputElement.value = '';

        renderSchedule();

        const modal = document.querySelector('[data-modal-target="#modal"]').dataset.modalTarget;
        openModal(document.querySelector(modal));
    } else {
        alert('Please select both date and time.');
        event.preventDefault();
    }
}

const bookButton = document.querySelector('.js-book-button');
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay2 = document.getElementById('overlay-2');

bookButton.addEventListener('click', (event) => {
    event.preventDefault();
    addDate();
    body.classList.add('no-scroll');
});

/*
openModalButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const modal = document.querySelector(button.dataset.modalTarget);
        if (!scheduleCall.date || !scheduleCall.time) {
            alert('Please select both date and time.');
            event.preventDefault();
            return;
        }
        openModal(modal);
        body.classList.add('no-scroll');
    });
});
*/

overlay2.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});


closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
        body.classList.remove('no-scroll');
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay2.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay2.classList.remove('active');
}



