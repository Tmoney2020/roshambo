let playerOneChoice = ''
let playerTwoChoice = ''

function handleClickRockP1(event) {
  playerOneChoice = 'rock'
  console.log(`Player 1 has choosen ${playerOneChoice}`)
}

function handleClickRockP2(event) {
  playerTwoChoice = 'rock'
  console.log(`Player 2 has choosen ${playerTwoChoice}`)
}

function handleClickPaperP1(event) {
  playerOneChoice = 'paper'
  console.log(`Player 1 has choosen ${playerOneChoice}`)
}

function handleClickPaperP2(event) {
  playerTwoChoice = 'paper'
  console.log(`Player 2 has choosen ${playerTwoChoice}`)
}

function handleClickScissorsP1(event) {
  playerOneChoice = 'scissors'
  console.log(`Player 1 has choosen ${playerOneChoice}`)
}

function handleClickScissorsP2(event) {
  playerTwoChoice = 'scissors'
  console.log(`Player 2 has choosen ${playerTwoChoice}`)
}

function checkWin() {
  const winningHeader = document.querySelector('h1')
  const teamOneNameForWin = document.querySelector('.teamname1 h2')
  const teamTwoNameForWin = document.querySelector('.teamname2 h2')

  if (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') {
    winningHeader.textContent = `The winner is ${teamOneNameForWin.textContent}`
  }
  if (playerOneChoice === 'rock' && playerTwoChoice === 'paper') {
    winningHeader.textContent = `The winner is ${teamTwoNameForWin.textContent}`
  }
  if (playerOneChoice === 'paper' && playerTwoChoice === 'rock') {
    winningHeader.textContent = `The winner is ${teamOneNameForWin.textContent}`
  }
  if (playerOneChoice === 'paper' && playerTwoChoice === 'scissors') {
    winningHeader.textContent = `The winner is ${teamTwoNameForWin.textContent}`
  }
  if (playerOneChoice === 'scissors' && playerTwoChoice === 'rock') {
    winningHeader.textContent = `The winner is ${teamTwoNameForWin.textContent}`
  }
  if (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') {
    winningHeader.textContent = `The winner is ${teamOneNameForWin.textContent}`
  }
  if (playerOneChoice === playerTwoChoice) {
    winningHeader.textContent = 'Draw! Choose again'
  }
}

function shoot() {
  const newPlayerOneChoice = document.getElementById('handP1')
  const newPlayerTwoChoice = document.getElementById('handP2')
  const rock =
    'https://cdn.instructables.com/F02/BBV9/I7Q0TFTU/F02BBV9I7Q0TFTU.LARGE.jpg?auto=webp&frame=1&fit=bounds'
  const paper =
    'https://cdn.instructables.com/FT9/YL66/I7Q0TFEK/FT9YL66I7Q0TFEK.LARGE.jpg?auto=webp&frame=1&fit=bounds'
  const scissors =
    'https://cdn.instructables.com/FO4/M1EF/I7Q0TFES/FO4M1EFI7Q0TFES.LARGE.jpg?auto=webp&frame=1&fit=bounds'

  if (playerOneChoice === 'rock') {
    newPlayerOneChoice.setAttribute('src', rock)
  }
  if (playerOneChoice === 'paper') {
    newPlayerOneChoice.setAttribute('src', paper)
  }
  if (playerOneChoice === 'scissors') {
    newPlayerOneChoice.setAttribute('src', scissors)
  }
  if (playerTwoChoice === 'rock') {
    newPlayerTwoChoice.setAttribute('src', rock)
  }
  if (playerTwoChoice === 'paper') {
    newPlayerTwoChoice.setAttribute('src', paper)
  }
  if (playerTwoChoice === 'scissors') {
    newPlayerTwoChoice.setAttribute('src', scissors)
  }
  checkWin()
}

function reset(event) {
  playerOneChoice = ''
  playerTwoChoice = ''

  const winningHeader = (document.querySelector('h1').textContent = '')
  const teamOneNameReset = (document.querySelector(
    '.teamname1 h2'
  ).textContent = 'Team 1')
  const teamTwoNameReset = (document.querySelector(
    '.teamname2 h2'
  ).textContent = 'Team 2')

  const beginningGif =
    'https://media.giphy.com/media/ZNo3OCM9CoEVz71ilQ/giphy.gif'
  const newPlayerOneChoice = document.getElementById('handP1')
  const newPlayerTwoChoice = document.getElementById('handP2')

  newPlayerOneChoice.setAttribute('src', beginningGif)
  newPlayerTwoChoice.setAttribute('src', beginningGif)

  const teamOneName = document.querySelector('.teamname1 input')
  teamOneName.value = ''
  const teamTwoName = document.querySelector('.teamname2 input')
  teamTwoName.value = ''
}

function updateTeamOneName(event) {
  const teamOneLog = document.querySelector('.teamname1 h2')
  teamOneLog.textContent = event.target.value
}

function updateTeamTwoName(event) {
  const teamTwoLog = document.querySelector('.teamname2 h2')
  teamTwoLog.textContent = event.target.value
}

const main = () => {
  const playerOneRock = document.querySelector('.rockP1')
  playerOneRock.addEventListener('click', handleClickRockP1)

  const playerTwoRock = document.querySelector('.rockP2')
  playerTwoRock.addEventListener('click', handleClickRockP2)

  const playerOnePaper = document.querySelector('.paperP1')
  playerOnePaper.addEventListener('click', handleClickPaperP1)

  const playerTwoPaper = document.querySelector('.paperP2')
  playerTwoPaper.addEventListener('click', handleClickPaperP2)

  const playerOneScissors = document.querySelector('.scissorsP1')
  playerOneScissors.addEventListener('click', handleClickScissorsP1)

  const playerTwoScissors = document.querySelector('.scissorsP2')
  playerTwoScissors.addEventListener('click', handleClickScissorsP2)

  const gameShoot = document.querySelector('.restartButton')
  gameShoot.addEventListener('click', shoot)

  const resetButtonClick = document.querySelector('.reset')
  resetButtonClick.addEventListener('click', reset)

  const teamOneName = document.querySelector('.teamname1 input')
  teamOneName.addEventListener('input', updateTeamOneName)

  const teamTwoName = document.querySelector('.teamname2 input')
  teamTwoName.addEventListener('input', updateTeamTwoName)
}

document.addEventListener('DOMContentLoaded', main)
