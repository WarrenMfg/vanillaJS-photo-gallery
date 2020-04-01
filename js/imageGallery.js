// GLOBAL VARIABLE
// captions--indices match file names
const captionCopy = [
  'A compelling backlit oil painting designed to juxtapose vibrant warm and cool colors. The typical grays that occur where these colors border each other are minimized with a darker hue of blue and a thinning of the magenta to create a smooth, yet articulate, transition. Prints are available in multichrome.',
  'These exotic jellyfish are six and a half feet in diameter and are composed of 98% water. Their evolutionary hydrostatic skeletons date back millions of years and can weigh up to 440 pounds. A sting from one of these has been known to kill at least 60 people around the world.',
  'This flower is known to attract the Brazilian Treehopper spider, which is known to live a mostly solitary life. With its furry eyeballs it collects the flower\'s pollen to deliver to its offspring. Traveling in jumps, most of the pollen detaches from the fur, thus helping spread the flower along the Amazonian floor.',
  'Pictured here is the Appalachian Trail in Georgia on a cool February morning. As each hiker continues to rest, conservationists quietly wake to start breakfast for the hikers staying in shelters. The trail is maintained by the hikers who partake in this breakfast, as a form of repayment for the hot meal. A quick shower later, they\'re off to the next adventure.',
  'Manufactured shapes. Circles on an inverted conical figure. The angles of the lines wane perspective from the center on out. What\'s at the top? Where is the top? The pink is igniting. The black is ominous like a black hole. What\'s on the other side? What\'s inside? How would I get there?'
];


// REGISTER EVENT LISTENERS
// click with event delegation
document.querySelector('#thumbnails').addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    const largeImage = document.querySelector('#largeImage'); // to be updated below
    const src = e.target.src.split('/'); // get file path
    const img = src[src.length - 1]; // get file name
    largeImage.src = `img/${img}`; // update image with new file name
    largeImage.alt = e.target.alt; // update alt text
    largeImage.title = e.target.title; // update title
    thumbUp(e.target); // update border
  }
});

// mouseover with event delegation
document.querySelector('#thumbnails').addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'IMG') {
    const caption = document.querySelector('#caption'); // to be updated below
    const src = e.target.src.split('/'); // get file path
    const index = src[src.length - 1].split('.')[0]; // get index (file name)
    caption.innerText = captionCopy[index]; // update #caption with captionCopy at appropriate index
  }
});

// mouseout with event delegation
document.querySelector('#thumbnails').addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'IMG') {
    const caption = document.querySelector('#caption'); // to be updated below
    const largeImage = document.querySelector('#largeImage'); // used for src and index below
    const src = largeImage.src.split('/'); // get file path
    const index = src[src.length - 1].split('.')[0]; // get index (file name)
    caption.innerText = captionCopy[index]; // revert to largeImage copy
  }
});

// #largeImage mouseover
document.querySelector('#largeImage').addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.style.cssText = 'transform: scale(1.25); transition: all 0.5s ease;';
  }
});

// #largeImage mouseout
document.querySelector('#largeImage').addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.style.cssText = 'transition: all 0.5s ease;';
  }
});


// UTILITY FUNCTIONS
// populate #caption with copy onload
(function() {
  const caption = document.querySelector('#caption'); // get #caption
  caption.innerText = captionCopy[0]; // add appropriate copy
})();

// update border for selected photo
function thumbUp(el) {
  const images = document.querySelector('#thumbnails').children; // get children
  Array.from(images).forEach((image) => image.classList.remove('thumbUp')); // remove class
  el.classList.add('thumbUp'); // add class
}