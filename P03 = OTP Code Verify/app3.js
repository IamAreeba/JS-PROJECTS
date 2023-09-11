

const inputs = document.querySelectorAll("input"),
      button = document.querySelector("button");

inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e)=> {
        const current = input,
              nextInput = input.nextElementSibling,
              previousInput = input.previousElementSibling;
        
        if(current.value.length > 1){
            current.value = "";
            return;
        }

        if(nextInput && nextInput.hasAttribute("disabled") && current.value !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
            console.log(nextInput);
        }

        if(e.key == "Backspace"){
            if(previousInput){
               input.setAttribute("disabled", false)
               current.value = "";
               previousInput.focus();
               console.log(input);
            }
        }

        if(!inputs[3].value == ""){
            button.classList.add("active");
        }

        button.classList.remove("active");
        


        
    })
})


window.addEventListener("load", ()=> {
    inputs[0].focus();
})