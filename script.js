// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

function onClick(event) {
    const div = event.currentTarget;
    div.style.backgroundColor = "#cfe3ff";
    console.log(div);
    const ckbox = document.querySelector('.checkbox');
    ckbox.src = 'images/checked.png';
    div.removeEventListener('click', onClick);
}

const images = document.querySelectorAll('.choice-grid div');
for (const image of images) {
    image.addEventListener('click', onClick);
}