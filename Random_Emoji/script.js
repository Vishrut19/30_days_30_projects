const btnElement = document.getElementById("btn");
const emojiNameElement = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=648bac67489a4985fad43798ae91b317a00f50b3"
  );

  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

btnElement.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random()*emoji.length)
  btnElement.innerHTML = emoji[randomNumber].emojiName
  emojiNameElement.innerHTML = emoji[randomNumber].emojiCode
  console.log(randomNumber)
});
