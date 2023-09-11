
const inputs = document.querySelectorAll("input"),
      button = document.querySelector("button");

    // console.log(inputs, button); 



inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {

        // This code gets the current input element and stores it in 
        // current input var

        // nextInput = next sibling element of the current input 
        // element
        
        // previousInput = previous sibling element of the current 
        // input element


        const current = input,
              nextInput = input.nextElementSibling,
              previousInput = input.previousElementSibling;


        if(current.value.length > 1){
            current.value = "";
            return;
        }

        // If the next input is disabled and the current value is 
        // not empty enable the next input and focux on it
        if(nextInput && nextInput.hasAttribute("disabled") && current.value !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        // If the backspace kewy is pressed
        if(e.key == "Backspace"){
            // Iterate over all inputs again
            
                // inputs.forEach((input, index2) => {
                // If the currentInput index1 =< index2 of input in the outer loop
                // an the previous element exsits, set the disabled property on the
                // input and focus on previous element
                
                if(previousInput){
                    input.setAttribute("disabled", true);
                    current.value = "";
                    previousInput.focus();
                }



            // })

        }

        if(!inputs[3].value  == ""){
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");

    })
})


// Focus the first input which index is 0 on winow load
window.addEventListener("load", ()=> {
    inputs[0].focus();
})
