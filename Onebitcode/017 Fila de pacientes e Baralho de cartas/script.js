function startQueueOfPatients() {
  const nameOfPatients = ['Miguel','Gael',"Arthur",'Helena','Alice','Heitor',598,'Theo','Laura','Davi','Samuel']

  let queuePosition =''
  for (n = 0; n < nameOfPatients.length; n++) {
    queuePosition += `\n${n} - ${nameOfPatients[n]}`
    if (n == 0){
      queuePosition += ' - Próximo'
    }else if (n==nameOfPatients.length-1){
      queuePosition += ' - Ultimo da fila'
    }
  }

  alert(queuePosition)
}