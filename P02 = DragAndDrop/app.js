

// DOM Elements
const boxes = document.querySelectorAll(".box"),
      image = document.querySelector(".image");


// Loop through each box element
boxes.forEach(box => {
    // When a draggable element drag over a box element
    box.addEventListener("dragover", e => {
        e.preventDefault();    // Prevent Default
        box.classList.add("hovered");
    })


    // When a draggable element leave box element
    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered");
    })


    // When a draggable element is dropped on a box element
    box.addEventListener("drop", () => {
        box.appendChild(image);
        box.classList.remove("hovered");
    })
})  