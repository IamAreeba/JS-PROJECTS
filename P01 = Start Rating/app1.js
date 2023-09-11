

const stars = document.querySelectorAll(".stars i");
console.log("Clicked " + stars);


stars.forEach((star, index1) => {
    // console.log(star);

    // star.addEventListener("click", ()=> {
        
    //     stars.forEach((star, index2) => {
    //         index1 >= index2 ? star.classList.add("active") :
    //                            star.classList.remove("active");
    //     })
    // })


    star.addEventListener("click", clicked);

    function clicked(){

        stars.forEach((star, index2) => {
            index1 >= index2  ? star.classList.add("active") :
            star.classList.remove("active");

        })
       
    }


})