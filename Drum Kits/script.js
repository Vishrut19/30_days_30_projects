const kits = ["crash","kick","snare","tom"]

const containerElement = document.querySelector(".container")


kits.forEach(kit => {
    // Populating Buttons Using JavaScript
    const btnElement = document.createElement("button")
    btnElement.classList.add("btn")
    btnElement.innerText = kit
    btnElement.style.backgroundImage = "url(images/" + kit + ".png)"
    containerElement.appendChild(btnElement)

    // Adding Audio Files Using JavaScript
    const audioElement = document.createElement("audio")
    audioElement.src = "sounds/" + kit + ".mp3"
    containerElement.appendChild(audioElement)

    // Adding EventListener to hear sound
    btnElement.addEventListener("click",() => {
        audioElement.play();
    })

    window.addEventListener("keydown", (event) => {
        if(event.key === kit.slice(0,1)){
            audioElement.play();
            btnElement.style.transform = "scale(.9)";
            setTimeout(() => {
                btnElement.style.transform = "scale(1)";
            }, 100);
        }
    })
})