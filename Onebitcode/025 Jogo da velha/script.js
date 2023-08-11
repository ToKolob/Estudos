const player1 = document.getElementById('playerName1')
const player2 = document.getElementById('playerName2')

const start = document.getElementById('start')
start.addEventListener('click',function(){
  const bx = document.querySelectorAll('div#box')

  document.documentElement.style.setProperty('--bg-color','#bbb')
  player1.disabled = true
  player2.disabled = true

  

})