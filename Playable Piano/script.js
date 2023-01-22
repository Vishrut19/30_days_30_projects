const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];
let audio = new Audio("tunes/a.wav"); //By default audio source is "a" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; //Passing audio source based on the key pressed.
  audio.play(); //Playing Audio
  console.log(allKeys);

  const clickedKey = document.querySelector(`[data-key = "${key}"]`); //getting clicked key element
  clickedKey.classList.add("active"); //adding active class to the clicked key element
  setTimeout(() => {
    //removing active class after 150ms from the clicked key element
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key); //adding data-key value to the allKeys array
  // Calling playTune function with passing data-key value as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const showHideKeys = () => {
    //toggling hide class from each key on the checkbox list
    pianoKeys.forEach(key => key.classList.toggle('hide'));
};

const handleVolume = (e) => {
  audio.volume = e.target.value; //passing the range slider value as audio volume
};

const pressedKey = (e) => {
  // if the pressed key is in the allKeys array, only call the playTune functions
  if (allKeys.includes(e.key)) playTune(e.key);
};

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
