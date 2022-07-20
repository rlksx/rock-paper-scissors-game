const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

const userScore = 0
const SystemScore = 0

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
  window.alert('você ganhou parabéns')
}
function playLosed() {
  window.alert('voce perdeu')
}
function playDraw() {
  window.alert('você empatou com o sistema')
}
