const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

const userScore = 0
const SistemScore = 0

const hands = ['handRock', 'handPaper', 'handScissors']

let handUser = ''
let handSistem = ''

rock.addEventListener('click', function () {
  handUser = hands[0]
})
paper.addEventListener('click', function () {
  handUser = hands[1]
})
scissors.addEventListener('click', function () {
  handUser = hands[2]
})


function getSistemChoice() {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min)
  handSistem = hands[randomNumber(0, hands.length)]
}

getSistemChoice()

function main() {
  // let numberAux = (min, max) => Math.floor(Math.random() * (max - min) + min)
}

window.alert(`${handSistem}`)