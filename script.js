const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const slideImg = document.getElementById("slide-img");
let slideIndex = 0;


const imgsArray = [ 
    "https://images.pexels.com/photos/600622/pexels-photo-600622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1483145/pexels-photo-1483145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1007810/pexels-photo-1007810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/29482399/pexels-photo-29482399/free-photo-of-vibrant-red-and-white-tulips-in-bloom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

slideImg.src = imgsArray[slideIndex];

function previousSlide() {
    console.log("previous slide working");
    slideIndex = (slideIndex - 1 + imgsArray.length) % imgsArray.length;
    slideImg.src = imgsArray[slideIndex];
}

function nextSlide() {
    console.log("next slide works bro");
    slideIndex = (slideIndex + 1) % imgsArray.length;
    slideImg.src = imgsArray[slideIndex];
  
}

