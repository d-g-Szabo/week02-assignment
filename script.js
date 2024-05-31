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

// Check if there is an image element, if not create one
if (document.body.lastElementChild.nodeName !== "IMG") {
  createImageBackground();
}

createThumbnailImages(images);

// Create big image element
function createImageBackground() {
  if (document.body.lastElementChild.nodeName === "IMG") {
    document.body.lastElementChild.remove();
  }
  let image = document.createElement("img");
  image.src = images[currentImage].src;
  image.alt = images[currentImage].alt;
  document.body.appendChild(image);
}

// Create thumbnails
function createThumbnailImages(imagesParam) {
  for (let index = 0; index < imagesParam.length; index++) {
    const image = imagesParam[index];
    let thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    thumbnail.tabIndex = index + 1; // Set tabindex to allow keyboard navigation, starting form 1 so that it is not 0 bc 0 is last in the tab order
    imageSlider.appendChild(thumbnail);
    thumbnail.addEventListener("click", () => {
      currentImage = index;
      image.src = images[currentImage].src;
      image.alt = images[currentImage].alt;
      createImageBackground();
    });
  }
}
