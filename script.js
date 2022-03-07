const container = document.querySelector('.container');
const imgContainer = document.querySelector('.img-container');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const navigationDots = [...document.querySelectorAll('.navigation > span')];

const images = [
    'https://images.unsplash.com/photo-1646634426203-410dd8aff2dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1646637389704-a58d65cace40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1646596504587-c3771cf62e81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1646567210056-2bca2d091dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
];

let counter = 0;

const imgEle = createImageElement(counter);
imgContainer.append(imgEle);

navigationDots[0].style.backgroundColor = 'black';

let interval = setInterval(showNextImage, 5000);

leftButton.addEventListener('click', () => {
    showPreviousImage();
    resetTimer();
}
);
rightButton.addEventListener('click', () => {
    showNextImage();
    resetTimer();
}
);

navigationDots.forEach((item, i) => {
    item.addEventListener('click', () => {
        counter = i;
        const imgEle = createImageElement(i);
        imgContainer.removeChild(imgContainer.firstElementChild);
        imgContainer.append(imgEle);
        updateNavigationDots(i);
        resetTimer();
    });
});

function resetTimer() {
    clearInterval(interval);
    interval = setInterval(showNextImage, 5000);
}

function showPreviousImage() {
    imgContainer.removeChild(imgContainer.firstElementChild);
    if (counter === 0) {
        counter = images.length - 1;
    } else {
        counter--;
    }
    const imgEle = createImageElement(counter);
    imgContainer.append(imgEle);
    updateNavigationDots(counter);
}

function showNextImage() {
    imgContainer.removeChild(imgContainer.firstElementChild);
    if (counter === images.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    const imgEle = createImageElement(counter);
    imgContainer.append(imgEle);
    updateNavigationDots(counter);
}

function updateNavigationDots(counter) {
    navigationDots.forEach((item, i) => {
        if (i === counter) {
            item.style.backgroundColor = 'black';
        } else {
            item.style.backgroundColor = 'aliceblue';
        }
    })
}

function createImageElement(counter) {
    const imgEle = document.createElement('img');
    imgEle.src = images[counter];
    imgEle.alt = 'error';
    return imgEle;
}