# week02-assignment

Project: Building an accessible image gallery

# Requirements:

- One page, with a set of thumbnail images, and a larger image
- Styled appropriately with CSS, and make use of media queries.
- Use client-side JavaScript to display the larger image when a thumbnail is selected
- Use client-side JavaScript to navigate between images using the keyboard (tab, enter)

I met all the requirements for this assignment. I tried to achive a similar look to the example website (https://image-galleryv2.vercel.app/) but with different pictures.

# Stretch Goals:

- Arrow keys are working correctly
- The images are looping from the end to the start and vice versa
- Used srcset attribute for pictures to adjust resolution depending on screen size. I made different sizes of pictures thumbnail(120w) HD, FullHD, 1440p, 4K

# Reflections:

What went really well and what could have gone better?

Styling went really well, as well as the JS part. Maybe a better way to optimize images, this seemed tedious.

Useful external sources:

- https://www.w3schools.com/jsref/met_html_click.asp
- https://www.toptal.com/developers/keycode
- https://gist.github.com/mavieth/e0c8fdcb72a30d85f57a
- https://www.w3schools.com/css/css_image_transparency.asp
- https://livefiredev.com/optimize-image-without-loss-of-quality/

Describing errors or bugs you encountered:

Passing srcset with JS to HTML was a pain because at first my pictures had " " spaces in it so it didnt work. I spent 3-4 hours figuring out how to do image optimazition and make it work while the only problem I had was spaces...

Requesting feedback about a specific part of your submission:

I wanted to do the announcer part as well but run out of time. I will come back to finish it if thats okay after deadline. Also I want to refactor the code because I have a lot of repeating code. I feel like there is a lot to imkprove on JS, like where to put a function. Should there be eventlisteners in the main scope. Should I only use functions and call them? I am not sure.
