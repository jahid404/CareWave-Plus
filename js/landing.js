/*
Product Name: Doctorly - Hospital & Clinic Management Laravel System
Author: Themesbrand
Version: 1.0.0
Website: https://themesbrand.com/
Contact: support@themesbrand.com
File: Landing Js File
*/


(function ($) {
    'use strict';

function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        340: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        540: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

var swiper = new Swiper(".testi-slider", {
    slidesPerView: 1,
    freeMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1040: {
            slidesPerView: 3
        }


    }
});

var navDropdown = document.getElementById("navbarNavDropdown");
if(navDropdown) {
    Array.from(navbarNavDropdown.querySelectorAll(".nav-link")).forEach((elem) => {
        elem.addEventListener("click", (e) => { 
            if(navbarNavDropdown.querySelector(".nav-link.active")) {
                navbarNavDropdown.querySelector(".nav-link.active").classList.remove("active");
            }

            elem.classList.add("active");
        });
    })
}

})(jQuery)