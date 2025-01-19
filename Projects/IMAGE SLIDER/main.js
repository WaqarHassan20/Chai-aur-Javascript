var counter = 0;
const slides = document.querySelectorAll(".slide");

slides.forEach(
    (slide, index) => {
        slide.style.left = ` ${index * 100}% `;
    }
)

const goNext = () => {
    counter++;
    slideImage();
}

const goPrev = () => {
    counter--;
    slideImage();
}

const slideImage = () => {
    setInterval();
    slides.forEach((slide) => {
        slide.style.transform = ` translateX(-${counter * 100}% )`;
    })
}

const setInterval = () => {
    if (counter >= 4) {
        counter = 0;
    }
}

