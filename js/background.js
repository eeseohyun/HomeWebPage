const images = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);
