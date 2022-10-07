const images = ['0.jpg', '1.jpg', '2.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement('img');

const wrap = document.querySelector('#wrap');


bgImage.src = `img/${chosenImage}`;


wrap.appendChild(bgImage);
