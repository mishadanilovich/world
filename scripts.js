import Toastify from 'toastify-js'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import "./scss/styles.scss";

new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const year = new Date().getFullYear();
const dateFormField = document.getElementById('date');
dateFormField.setAttribute("min", year + "-01-01");
dateFormField.setAttribute("max", year + "-12-31");

const bookingForm = document.querySelector("#booking-form")
bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (bookingForm.checkValidity()) {
        const { firstName, lastName} = Object.fromEntries(new FormData(event.target).entries());

        Toastify({
            style: {
                maxWidth: '350px',
                background: '#16813b',
            },
            text: `${lastName} ${firstName}, заявка отправлена успешно. Скоро с вами свяжутся!`,
            duration: 3000
        }).showToast();
        bookingForm.reset();
    }
});