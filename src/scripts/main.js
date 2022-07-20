const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

const title = document.getElementById('title')
const score = document.getElementById('score')

let userScore = 0
let systemScore = 0

const hands = ['hr', 'hp', 'hs']
/* hr == hand rock, hp == hand paper, hs == hand scissors */

let handUser = ''
let handSystem = ''

rock.addEventListener('click', function () {
  handUser = hands[0]
  getSystemChoice()
  main()
})
paper.addEventListener('click', function () {
  handUser = hands[1]
  getSystemChoice()
  main()
})
scissors.addEventListener('click', function () {
  handUser = hands[2]
  getSystemChoice()
  main()
})

function getSystemChoice() {
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min)
  handSystem = hands[randomNumber(0, hands.length)]
}

function main() {
  switch (handUser + handSystem) {
    case 'hrhr':
      playDraw()
      break
    case 'hrhp':
      playLosed()
      break
    case 'hrhs':
      playWin()
      break
    case 'hphr':
      playWin()
      break
    case 'hphp':
      playDraw()
      break
    case 'hphs':
      playLosed()
      break
    case 'hshr':
      playLosed()
      break
    case 'hshp':
      playWin()
      break
    case 'hshs':
      playDraw()
      break
  }
  // window.alert(`${handUser + handSystem}`)
}

function playWin() {
  title.innerHTML = 'Você ganhou 1 ponto!'
  userScore++
  score.innerHTML = `${userScore} : ${systemScore}`
}
function playLosed() {
  title.innerHTML = 'Você perdeu! sistema ganhou 1 ponto!'
  systemScore++
  score.innerHTML = `${userScore} : ${systemScore}`
}
function playDraw() {
  title.innerHTML = 'Empate! ninguém ganhou pontos!'
}