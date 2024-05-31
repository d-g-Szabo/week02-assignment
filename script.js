const imageSlider = document.querySelector(".image-slider");
const thumbnails = document.querySelectorAll(".image-slider img");

// Create images array, inside array create objects with src and alt properties
let images = [
  (image1 = {
    src: "./assets/image1.jpg",
    alt: "Image 1",
  }),
  (image2 = {
    src: "./assets/image2.jpg",
    alt: "Image 2",
  }),
  (image3 = {
    src: "./assets/image3.jpg",
    alt: "Image 3",
  }),
  (image4 = {
    src: "./assets/image4.jpg",
    alt: "Image 4",
  }),
  (image5 = {
    src: "./assets/image5.jpg",
    alt: "Image 5",
  }),
  (image6 = {
    src: "./assets/image6.jpg",
    alt: "Image 6",
  }),
];

let currentImage = 0;

// Create big image element
function createImageBackground() {
  let image = document.createElement("img");
  image.src = images[currentImage].src;
  image.alt = images[currentImage].alt;
  document.body.appendChild(image);
}

// Create thumbnails
function createThumbnailImages() {
  for (let index = 0; index < images.length; index++) {
    const image = images[index];
    let thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    thumbnail.tabIndex = index + 1; // Set tabindex to allow keyboard navigation, starting form 1 so that it is not 0 bc 0 is last in the tab order
    imageSlider.appendChild(thumbnail);
  }
}

// Add event listener to each thumbnail image
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentImage = index;
    image.src = images[currentImage].src;
    image.alt = images[currentImage].alt;
  });
});
