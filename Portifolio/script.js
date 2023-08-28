const articles = document.querySelectorAll('article')

articles.forEach((article)=> {article.addEventListener('click',toggleUL)})

function toggleUL(ev) {
  const ul = ev.currentTarget.querySelector('ul')
  ul.classList.toggle('hidden')

  //toggle size
  const article = ev.currentTarget
  
  if (article.style.height === '150%'){
    article.style.height = '100%'
    
  }else{
    article.style.height = '150%'
  }
}