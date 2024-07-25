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
