
// Taking references of DOM Elements
const body = document.querySelector("body"),
      hourHand = document.querySelector(".hour"),
      minHand = document.querySelector(".minute"),
      secHand = document.querySelector(".second"),
      modeSwitch = document.querySelector(".mode-switch");


// Check if the mode is already set to "Dark Mode" in local storage

if(localStorage.getItem("mode") === "Dark Mode"){
    // Add dark class to body and set modeSwitch text to Light Mode
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}


// Add a click event listner to mode switch
modeSwitch.addEventListener("click", ()=> {
    // Toggle the "dark class" on the body element
    body.classList.toggle("dark");

    // Check if the "dark" class is currently on body element
    const isDarkMode = body.classList.contains("dark");
    // console.log(isDarkMode);

    // set modeSwitch text based on "dark" class presence
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

    // Set the local storage "mode" item based on "dark" class presence
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");


})




const updateTime = () => {
    // console.log("time"); 

    // Get the current time and calculate degrees for clock hands
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360;
        minToDeg = (date.getMinutes() / 60) * 360;
        hrToDeg = (date.getHours() / 12) * 360;
    
    // console.log(secToDeg);

    // Rotate the clock hands to the appropriate degbased on the current time
    secHand.style.transform = `rotate(${secToDeg}deg)`;
    minHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;


}


// Call update time to set clock hands every second
setInterval(updateTime, 1000);



// Call update func on page load
updateTime();