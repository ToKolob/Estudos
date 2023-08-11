const main = document.querySelector('main')
const root = document.querySelector(':root')
const inputs = document.querySelector('input')
const resultInput = document.querySelector('input#result')

const allowedKeys =  ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.numKey').forEach(function(btn){
  btn.addEventListener('click',function(){
    const value = btn.dataset.value
    inputs.value += value
  })
})

document.getElementById('clear').addEventListener('click', function(){
  inputs.value = ''
  inputs.focus()
})

inputs.addEventListener('keydown',function(ev){
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)){
    inputs.value += ev.key
    return
  }
  if (ev.key === 'Backspace') {
    inputs.value = inputs.value.slice(0,-1)
  }
  if (ev.key === 'Enter'){
    calculate()
  }
})



document.getElementById('equal').addEventListener('click',calculate)
 
function calculate() {
  resultInput.value = 'Error'
  resultInput.classList.add('error')
  const result = eval(inputs.value)
  resultInput.value = result
  resultInput.classList.remove('error')
  
  
}

document.getElementById('themeSwitch').addEventListener('click',function(){
  if (main.dataset.theme === 'dark'){
    root.style.setProperty('--bg-color', '#fff')
    root.style.setProperty('--font-color', '#222')
    root.style.setProperty('--primary-color', '#2a1')
    main.dataset.theme = 'light'
  }
  else{
    root.style.setProperty('--bg-color', '#222')
    root.style.setProperty('--font-color', '#fff')
    root.style.setProperty('--primary-color','#4dff91')
    main.dataset.theme = 'dark'
  }
})

document.getElementById('copyToClipboard').addEventListener('click',function(){
  window.navigator.clipboard.writeText(resultInput.value)

})