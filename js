// script.js

// Get all images
const images = document.querySelectorAll('.image img');

// Function to show image in a modal
function showModal(src, alt) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const enlargedImg = document.createElement('img');
    enlargedImg.src = src;
    enlargedImg.alt = alt;

    modal.appendChild(enlargedImg);
    document.body.appendChild(modal);

    modal.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
}

// Add click event listener to each image
images.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.src;
        const alt = image.alt;
        showModal(src, alt);
    });
});
