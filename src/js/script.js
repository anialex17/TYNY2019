
/* slider */

var swiper = new Swiper(".speakers-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});




/* form validation */


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRegex = /^[a-zA-Z]+$/;


const form = document.getElementById("form-btn");
const inputs = document.querySelectorAll(".form .form__item");

inputs.forEach(input => {
    input.addEventListener("change", () => input.classList.remove("error"))
});

form.addEventListener("click", e => {
    e.preventDefault();

    const formData = { name: "", email: "", message: "" };
    let isError = false;

    inputs.forEach(item => {
        const { name, value } = item;
        const trimValue = value.trim();

        switch (name) {
            case "email": {
                if (emailRegex.test(trimValue)) {
                    formData[name] = trimValue;
                } else {
                    isError = true;
                    item.classList.add("error");
                }
                break;
            }
            case "name": {
                if (trimValue.length > 2 && nameRegex.test(trimValue)) {
                    formData[name] = trimValue;
                } else {
                    isError = true;
                    item.classList.add("error");
                }
                break;
            }
            default: {
                if (trimValue.length > 0) {
                    formData[name] = trimValue;
                } else {
                    isError = true;
                    item.classList.add("error");
                }
            }
        }
    });

    if (!isError) {
        console.log(formData);
    }
})

/* menu */
const menuButton = document.querySelector(".menu-button")
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle("_active")
    document.querySelector(".header_content").classList.toggle("active")
})
