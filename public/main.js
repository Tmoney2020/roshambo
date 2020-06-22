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

  if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'lizard') ||
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') ||
    (playerOneChoice === 'lizard' && playerTwoChoice === 'spock') ||
    (playerOneChoice === 'lizard' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'lizard') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'spock') ||
    (playerOneChoice === 'spock' && playerTwoChoice === 'scissors') ||
    (playerOneChoice === 'spock' && playerTwoChoice === 'rock')
  ) {
    winningHeader.textContent = `The winner is ${teamOneNameForWin.textContent}`
  }

  if (
    (playerOneChoice === 'lizard' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'spock' && playerTwoChoice === 'lizard') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'lizard') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'scissors') ||
    (playerOneChoice === 'lizard' && playerTwoChoice === 'scissors') ||
    (playerOneChoice === 'rock' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'spock' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'spock') ||
    (playerOneChoice === 'rock' && playerTwoChoice === 'spock')
  ) {
    winningHeader.textContent = `The winner is ${teamTwoNameForWin.textContent}`
  }

  if (playerOneChoice === playerTwoChoice) {
    winningHeader.textContent = 'Draw! Choose again'
  }
}

function shoot() {
  const newPlayerOneChoice = document.getElementById('handP1')
  const newPlayerTwoChoice = document.getElementById('handP2')
  const rock = 'https://i.imgur.com/ooArqzR.gif'
  const paper = 'https://media.giphy.com/media/PPuctmBKTFDMs/giphy.gif'
  const scissors =
    'https://media.tenor.com/images/ce75301dc23bbd5b78500a62c9384efb/tenor.gif'
  const lizard = 'https://i.gifer.com/KQG.gif'
  const spock =
    'https://66.media.tumblr.com/dae67b641a97a28008c9984b27f3a200/tumblr_mn6tziLHh11rhg5lso1_500.gif'

  if (playerOneChoice === 'rock') {
    newPlayerOneChoice.setAttribute('src', rock)
  }
  if (playerOneChoice === 'paper') {
    newPlayerOneChoice.setAttribute('src', paper)
  }
  if (playerOneChoice === 'scissors') {
    newPlayerOneChoice.setAttribute('src', scissors)
  }
  if (playerOneChoice === 'spock') {
    newPlayerOneChoice.setAttribute('src', spock)
  }
  if (playerOneChoice === 'lizard') {
    newPlayerOneChoice.setAttribute('src', lizard)
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
  if (playerTwoChoice === 'spock') {
    newPlayerTwoChoice.setAttribute('src', spock)
  }
  if (playerTwoChoice === 'lizard') {
    newPlayerTwoChoice.setAttribute('src', lizard)
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

function handleClickSpockP1(event) {
  playerOneChoice = 'spock'
}

function handleClickSpockP2(event) {
  playerTwoChoice = 'spock'
}

function handleClickLizardP1(event) {
  playerOneChoice = 'lizard'
}

function handleClickLizardP2(event) {
  playerTwoChoice = 'lizard'
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

  const playerOneSpock = document.querySelector('.spockP1')
  playerOneSpock.addEventListener('click', handleClickSpockP1)

  const playerTwoSpock = document.querySelector('.spockP2')
  playerTwoSpock.addEventListener('click', handleClickSpockP2)

  const playerOneLizard = document.querySelector('.lizardP1')
  playerOneLizard.addEventListener('click', handleClickLizardP1)

  const playerTwoLizard = document.querySelector('.lizardP2')
  playerTwoLizard.addEventListener('click', handleClickLizardP2)

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
