// import "./style.css"
// import javascriptLogo from "./javascript.svg"
// import { setupCounter } from "./counter.js"

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

// const Blip1 = require("./mp3/Blip1.mp3")
// const Blip2 = require("./mp3/Blip2.mp3")
// const Blip3 = require("./mp3/Blip3.mp3")
// const Blip4 = require("./mp3/Blip4.mp3")
// const Blip5 = require("./mp3/Blip5.mp3")
// const Blip6 = require("./mp3/Blip6.mp3")
// const Blip7 = require("./mp3/Blip7.mp3")
// const Blip8 = require("./mp3/Blip8.mp3")
// const Blip9 = require("./mp3/Blip9.mp3")
// const Blip10 = require("./mp3/Blip10.mp3")
// const FastType = require("./mp3/FastType.mp3")
// const Keys1 = require("./mp3/Keys1.mp3")
// const Keys2 = require("./mp3/Keys2.mp3")
// const Keys3 = require("./mp3/Keys3.mp3")
// const Keys4 = require("./mp3/Keys4.mp3")
// const Keys5 = require("./mp3/Keys5.mp3")
// const Keys6 = require("./mp3/Keys6.mp3")
// const Keys7 = require("./mp3/Keys7.mp3")
// const Keys8 = require("./mp3/Keys8.mp3")
// const Keys9 = require("./mp3/Keys9.mp3")
// const Keys10 = require("./mp3/Keys10.mp3")
// const Keys11 = require("./mp3/Keys11.mp3")
// const Marimba1 = require("./mp3/Marimba1.mp3")
// const Marimba2 = require("./mp3/Marimba2.mp3")
// const Marimba3 = require("./mp3/Marimba3.mp3")
// const Marimba4 = require("./mp3/Marimba4.mp3")
// const Marimba5 = require("./mp3/Marimba5.mp3")
// const Marimba6 = require("./mp3/Marimba6.mp3")
// const Marimba7 = require("./mp3/Marimba7.mp3")
// const Marimba8 = require("./mp3/Marimba8.mp3")
// const Marimba9 = require("./mp3/Marimba9.mp3")
// const Marimba10 = require("./mp3/Marimba10.mp3")
// const Marimba11 = require("./mp3/Marimba11.mp3")
// const Marimba12 = require("./mp3/Marimba12.mp3")
// const Marimba13 = require("./mp3/Marimba13.mp3")
// const Voice1 = require("./mp3/Voice1.mp3")
// const Voice2 = require("./mp3/Voice2.mp3")
// const Xylo1 = require("./mp3/Xylo1.mp3")
// const Xylo2 = require("./mp3/Xylo2.mp3")

const handleButtonClick = (e) => {
  const { target } = e

  if (target.matches("button")) {
    const id = target.id.replace("-button", "")
    console.log(id)

    const select = document.getElementById(id)
    console.log(select.value)
    const soundName = select.value
    playSound(soundName)
  }
}

const handleSubmitClick = (e) => {
  const { target } = e
  const select1val = document.getElementById("incoming-inactive").value
  const select2val = document.getElementById("incoming-active").value
  const select3val = document.getElementById("outgoing").value
  console.log(select1val, select2val, select3val)

  localStorage.setItem("ZD-test-sound-1", select1val)
  localStorage.setItem("ZD-test-sound-2", select2val)
  localStorage.setItem("ZD-test-sound-3", select3val)
}

const playSound = (soundName) => {
  const location = `./mp3/${soundName}.mp3`
  console.log("will play", location)
  const sound = new Audio(location)

  sound.play()
}

const button1 = document.getElementById("incoming-inactive-button")
button1.addEventListener("click", handleButtonClick)

const button2 = document.getElementById("incoming-active-button")
button2.addEventListener("click", handleButtonClick)

const button3 = document.getElementById("outgoing-button")
button3.addEventListener("click", handleButtonClick)

const submitButton = document.getElementById("submit")
button3.addEventListener("click", handleSubmitClick)
