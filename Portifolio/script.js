const itauTopics = document.querySelector('#itauTopics')
itauTopics.addEventListener('click',openBox)

const articles = document.querySelectorAll('article')
articles[0].addEventListener('click',openBox)
articles[0].addEventListener('mouseleave',closeBox)

function closeBox(){
  itauTopics.parentElement.removeChild(itauTopics)

}
itauTopics.parentElement.removeChild(itauTopics)

function openBox(el){
    
  const clickedEl = el.currentTarget
  clickedEl.appendChild(itauTopics)
} 