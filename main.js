import "./style.css"
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

import Blip1 from "./mp3/Blip1.mp3"
import Blip2 from "./mp3/Blip2.mp3"
import Blip3 from "./mp3/Blip3.mp3"
import Blip4 from "./mp3/Blip4.mp3"
import Blip5 from "./mp3/Blip5.mp3"
import Blip6 from "./mp3/Blip6.mp3"
import Blip7 from "./mp3/Blip7.mp3"
import Blip8 from "./mp3/Blip8.mp3"
import Blip9 from "./mp3/Blip9.mp3"
import Blip10 from "./mp3/Blip10.mp3"
import FastType from "./mp3/FastType.mp3"
import Keys1 from "./mp3/Keys1.mp3"
import Keys2 from "./mp3/Keys2.mp3"
import Keys3 from "./mp3/Keys3.mp3"
import Keys4 from "./mp3/Keys4.mp3"
import Keys5 from "./mp3/Keys5.mp3"
import Keys6 from "./mp3/Keys6.mp3"
import Keys7 from "./mp3/Keys7.mp3"
import Keys8 from "./mp3/Keys8.mp3"
import Keys9 from "./mp3/Keys9.mp3"
import Keys10 from "./mp3/Keys10.mp3"
import Keys11 from "./mp3/Keys11.mp3"
import Marimba1 from "./mp3/Marimba1.mp3"
import Marimba2 from "./mp3/Marimba2.mp3"
import Marimba3 from "./mp3/Marimba3.mp3"
import Marimba4 from "./mp3/Marimba4.mp3"
import Marimba5 from "./mp3/Marimba5.mp3"
import Marimba6 from "./mp3/Marimba6.mp3"
import Marimba7 from "./mp3/Marimba7.mp3"
import Marimba8 from "./mp3/Marimba8.mp3"
import Marimba9 from "./mp3/Marimba9.mp3"
import Marimba10 from "./mp3/Marimba10.mp3"
import Marimba11 from "./mp3/Marimba11.mp3"
import Marimba12 from "./mp3/Marimba12.mp3"
import Marimba13 from "./mp3/Marimba13.mp3"
import Voice1 from "./mp3/Voice1.mp3"
import Voice2 from "./mp3/Voice2.mp3"
import Xylo1 from "./mp3/Xylo1.mp3"
import Xylo2 from "./mp3/Xylo2.mp3"

const sounds = {
  Blip1,
  Blip2,
  Blip3,
  Blip4,
  Blip5,
  Blip6,
  Blip7,
  Blip8,
  Blip9,
  Blip10,
  FastType,
  Keys1,
  Keys2,
  Keys3,
  Keys4,
  Keys5,
  Keys6,
  Keys7,
  Keys8,
  Keys9,
  Keys10,
  Keys11,
  Marimba1,
  Marimba2,
  Marimba3,
  Marimba4,
  Marimba5,
  Marimba6,
  Marimba7,
  Marimba8,
  Marimba9,
  Marimba10,
  Marimba11,
  Marimba12,
  Marimba13,
  Voice1,
  Voice2,
  Xylo1,
  Xylo2,
}

const handleButtonClick = (e) => {
  const { target } = e

  if (target.matches("button")) {
    const id = target.id.replace("-button", "")
    const select = document.getElementById(id)
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
  // const location = `./mp3/${soundName}.mp3`
  console.log("will play", soundName)
  const sound = new Audio(sounds[soundName])

  sound.play()
}

const button1 = document.getElementById("incoming-inactive-button")
button1.addEventListener("click", handleButtonClick)

const button2 = document.getElementById("incoming-active-button")
button2.addEventListener("click", handleButtonClick)

const button3 = document.getElementById("outgoing-button")
button3.addEventListener("click", handleButtonClick)

const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", handleSubmitClick)
