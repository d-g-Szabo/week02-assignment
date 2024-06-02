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
// todo Optimised large images as JPEGs for slow connections
// todo Correct use of alt text attribute for images
// todo - enable the use of the arrow keys to navigate through the images
// ! meets expectations:
// ! Design works on small mobile, and adjusts using media queries to work well on larger desktop screens (eg. above 800px).
// ! Correct use of alt text attribute for images.
// ! Optimised large images as JPEGs for slow connections.
// !    Correct use of event handlers for switching the image.
// !
// The document has a set of keyboard events, including keydown. This event receives an object with a .key property containing the key that was pressed. For example, ArrowRight and ArrowLeft.

// 🏹 Use your operating system's voiceover tools or a Screen Reader to have the computer announce the alt text of the selected image.

// ✨ Using role="status" like this will cause the voiceover to read out the content inside whenever it changes. Create a div, select it by id, and then try changing it's .textContext property with JS. <div id="announcer" role="status" aria-live="assertive" aria-atomic="true"></div>

// Check if there are thumbnails, if not create them
if (imageSlider.firstChild.nodeName !== "IMG") {
  createThumbnailImages(images);
}

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
    thumbnail.tabIndex = 0; // Set tabindex to allow keyboard navigation, starting form 1 so that it is not 0 bc 0 is last in the tab order
    imageSlider.appendChild(thumbnail);
    // Add event listener to the thumbnail images on mouse click
    thumbnail.addEventListener("click", () => {
      currentImage = index;
      image.src = images[currentImage].src;
      image.alt = images[currentImage].alt;
      createImageBackground();
    });
    // Add event listener to the thumbnail images on keyboard enter key
    thumbnail.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        currentImage = index;
        image.src = images[currentImage].src;
        image.alt = images[currentImage].alt;
        createImageBackground();
      }
    });
    // thumbnail.addEventListener("keypress", (event) => {
    //   if (event.key === "ArrowRight") {
    //     currentImage = index + 1;
    //     image.src = images[currentImage].src;
    //     image.alt = images[currentImage].alt;
    //     createImageBackground();
    //   }
    // });
    // thumbnail.addEventListener("keypress", (event) => {
    //   if (event.key === "ArrowLeft") {
    //     currentImage = index - 1;
    //     image.src = images[currentImage].src;
    //     image.alt = images[currentImage].alt;
    //     createImageBackground();
    //   }
    // });
  }
}
