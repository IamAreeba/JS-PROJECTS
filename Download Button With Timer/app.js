

const downloadBtn = document.querySelector(".download-btn");


// File Link
const fileLink = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";


const initTimer = () => {
    // If download btn contains disable-Timer class then only if conditional code will run
    if(downloadBtn.classList.contains("disable-timer")){
        return(location.href = fileLink);
    }



    // getting data-timer attribute from HTML
    let timer = downloadBtn.dataset.timer;
    // console.log(timer);
    downloadBtn.classList.add("timer");

    


    //Creating init counter var with setInterval func
    const initCounter = setInterval(() => {   
        if (timer > 0) {
            timer--;
            // console.log(`hello ${timer}`);
            return downloadBtn.innerHTML = `Your file  will download in <b>${timer}</b> seconds`;
        }
        console.log("cleared");
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Your file is downloading...";

        setTimeout(()=>{
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class=" icon material-download-btn"><i class='bx bxs-download'></i></span>
            <span class="text">Download Again</span>`
        }, 3000);

    }, 1000)    // 1000 millisecond = 1sec

    


}

downloadBtn.addEventListener("click", initTimer);