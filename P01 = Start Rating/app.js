

// Select all elements with i tag and store them in Nodeist called Stars
const stars = document.querySelectorAll(".stars i");
// console.log(stars);

//Loop through the stars NodeList
stars.forEach((star,index1) => {
    // Add an event listner that runs a function when the "click" event
    // is triggered
    star.addEventListener("click", () => {
        console.log("Clicked " + index1);

        //Loop through the "stars" Nodelist again
        stars.forEach((star, index2) => {
            

            // Add the "active" class to the clicked star and any 
            // stars with a lower index and remve the "active" class
            // from any starswith a higher index

            index1 >=  index2 ? star.classList.add("active") :
                              star.classList.remove("active");
                              console.log(index2);
        }) 
    });

})

// function countRating(){
//     console.log("Clicked " + index1);
// }