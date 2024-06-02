const imageSlider = document.querySelector(".image-slider");
const thumbnails = document.querySelectorAll(".image-slider img");

// Create images array, inside array create objects with src and alt properties
let images = [
  (image1 = {
    src: "./assets/a-green-valley-with-a-mountain-in-the-background-4k.jpg",
    alt: "a green valley with a mountain in the background",
    srcset:
      "./assets/a-green-valley-with-a-mountain-in-the-background-4k.jpg 3840w, ./assets/a-green-valley-with-a-mountain-in-the-background-1440p.jpg     2560w, ./assets/a-green-valley-with-a-mountain-in-the-background-1080p.jpg 1920w, ./assets/a-green-valley-with-a-mountain-in-the-background-hd.jpg 1366w, ./assets/a-green-valley-with-a-mountain-in-the-background-thumbnail.jpg 125w",
    size: "(max-width: 126px) 100vw, 125px", //up to 126px width, the image will be taking up 100% of Viewport Width. 125px: This part is saying that if the previous condition is not met, then assume that the image is taking up 125px Width.
  }),
  (image2 = {
    src: "./assets/aerial view of sea and mountain during sunset.jpg",
    alt: "aerial view of sea and mountain during sunset",
  }),
  (image3 = {
    src: "./assets/green grass field with trees and white building in distance.jpg",
    alt: "green grass field with trees and white building in distance",
  }),
  (image4 = {
    src: "./assets/mountain facing on shore.jpg",
    alt: "mountain facing on shore",
  }),
  (image5 = {
    src: "./assets/Tower bridge under gray sky.jpg",
    alt: "Tower bridge under gray sky",
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
  image.srcset = images[currentImage].srcset;
  document.body.appendChild(image);
}

// Create thumbnails
function createThumbnailImages(imagesParam) {
  for (let index = 0; index < imagesParam.length; index++) {
    const image = imagesParam[index];
    let thumbnail = document.createElement("img");
    thumbnail.src = image.src;
    thumbnail.alt = image.alt;
    thumbnail.srcset = image.srcset;
    thumbnail.tabIndex = 0; // Set tabindex to allow keyboard navigation, starting form 1 so that it is not 0 bc 0 is last in the tab order
    imageSlider.appendChild(thumbnail);
    // Add event listener to the thumbnail images on mouse click
    thumbnail.addEventListener("click", () => {
      currentImage = index;
      image.src = images[currentImage].src;
      image.alt = images[currentImage].alt;
      image.srcset = images[currentImage].srcset;
      createImageBackground();
    });
    // Add event listener to the thumbnail images on keyboard enter key
    thumbnail.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        currentImage = index;
        image.src = images[currentImage].src;
        image.alt = images[currentImage].alt;
        image.srcset = images[currentImage].srcset;
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
