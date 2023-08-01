let txnewCity = document.querySelector('input#newCity')
const txres = document.querySelector('div#res')
let spres = document.querySelector('span#res')
const crlist = document.createElement('select')
crlist.size = '10'
crlist.style.width = '200px'

function appendCity() {
  if (txnewCity.value.length > 0) {
    let crnewCity = document.createElement('option')
    crnewCity.textContent = txnewCity.value
    crlist.appendChild(crnewCity)
    txres.appendChild(crlist)
    let listOfCityies = []
    listOfCityies += txnewCity.value

    for (let city in listOfCityies){
      spres.innerHTML += city
    } 

    

  } else {
    window.alert('Verifique os dados e tente novamente.')
  }
}

