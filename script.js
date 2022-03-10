const container = document.querySelector('.container');
const imgContainer = document.querySelector('.img-container');
const rightButton = document.querySelector('.right');
const buttons = document.querySelectorAll('.btn');

const navigationDots = [...document.querySelectorAll('.navigation > span')];
const imageSlides = [...document.querySelectorAll(".slide")];

let interval = setInterval(showNextImage, 5000);

buttons.forEach((btn) => {
    btn.addEventListener('click', () => updateImage(btn));
})

function updateImage(btn) {
    const offset = btn.classList.contains('left') ? -1 : 1;
    
    const currentImage = document.querySelector('.active');
    const currentIdx = imageSlides.indexOf(currentImage);
    let nextIdx = currentIdx + offset;
    if (nextIdx < 0) nextIdx = imageSlides.length - 1;
    if (nextIdx >= imageSlides.length) nextIdx = 0;
    
    currentImage.classList.remove('active');
    imageSlides[nextIdx].classList.add('active');
    
    updateNavigationDots(nextIdx);
    resetTimer();

}

function showNextImage() {
    updateImage(rightButton);
}

navigationDots.forEach((item, i) => {
    item.addEventListener('click', () => {
        const imgEle = imageSlides[i];
        document.querySelector(".active").classList.remove("active");
        imgEle.classList.add("active");
        updateNavigationDots(i);
        resetTimer();
    });
});

function resetTimer() {
    clearInterval(interval);
    interval = setInterval(showNextImage, 5000);
}

function updateNavigationDots(nextIdx) {
    document.querySelector('.dot.current').classList.remove('current');
    navigationDots[nextIdx].classList.add('current');
}