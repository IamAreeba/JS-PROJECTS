

const boxes = document.querySelectorAll(".box"),
      image = document.querySelector(".image");

// Loop through each box element

boxes.forEach(box => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.classList.add("hovered");
    })


    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered");
    })

    box.addEventListener("drop", () => {
        box.appendChild(image);
        box.classList.remove("hovered");
    })
})




// --------------  Rating Star Work  --------------------
const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active"):
                               star.classList.remove("active");
        })

    })
})


