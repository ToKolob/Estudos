let menu = ''


let jobVacancy =[{nome:"Administrador",descricao:"auxiliar de serviços administrativos",espira:'25/12',candidatos:['Felipe','Marcio','Penelope']},{nome:"Escriturário",descricao:"auxiliar de escritório",espira:'01/02', candidatos:['Gilmar']}]

function addCandidate(){

}

function info(array = jobVacancy, startInfo = 0, finishInfo = length) {
  let information = ''
    for (let index = startInfo; index < array.finishInfo; index++) {
      information += `\n${index + 1}. Nome da vaga: ${array[index].nome}\n   Descrição: ${array[index].descricao}\n   Data Limite: ${array[index].espira}\n   Candidatos: ${array[index].candidatos.length}\n`;    
    }
  return (information)
}

function addingToVacancy(nameVacancy,description,limitDate){
  newVacancy = {}
  newVacancy.nome = nameVacancy
  newVacancy.descricao = description
  newVacancy.espira = limitDate
  newVacancy.candidatos = []
  let confirmationMensage = `Revise os dados: nome: ${newVacancy.nome} descrição: ${newVacancy.descricao} e data limite: ${newVacancy.espira} }`
  confirmation = confirm(confirmationMensage)
  if (confirmation){
    return newVacancy}
  else{
    alert('Dados apagados')
}
}

function startProgram() {  
  do {
    menu = prompt('***Menu***\n\n    1. Listar vagas disponíveis\n    2. Criar nova vaga\n    3. Visualizar uma vaga\n    4. Inscrever candidato em uma vaga\n    5. Excluir uma vaga\n    6. Sair')
    switch (menu) {
      case '1':
        //Listar vagas
        let information = '***Listagem das vagas***\n'
        for (let index = 0; index < jobVacancy.length; index++) {
          information += `\n${index + 1}. Nome da vaga: ${jobVacancy[index].nome}\n   Descrição: ${jobVacancy[index].descricao}\n   Data Limite: ${jobVacancy[index].espira}\n   Candidatos: ${jobVacancy[index].candidatos.length}\n`;    
        }
        alert (information)        
        break;

      case '2':
        //Criar nova vaga
        let nameVacancy = prompt('Nome da vaga:')
        let description = prompt('Descrição da vaga')
        let limitDate = prompt('Data em que espira')
        jobVacancy.push(addingToVacancy(nameVacancy,description,limitDate))
        break;

      case '3':
        whichVage = prompt('Qual vaga deseja visualizar?')
        alert(info(jobVacancy,whichVage-1,whichVage))
        //Visualizar uma vaga        
        break;

      case '4':
        let candidateName = prompt('Qual o nome do candidato?')
        let candidateVacancy = prompt('Qual vaga ele vai se candidatar?')
        jobVacancy[candidateVacancy-1].candidatos.push(candidateName)

        //Inscrever um candidato a vaga

        
        break;
      case '5':
        //Excluir uma vaga
        let deletedVacancy = prompt('qual deseja deletar?')
        jobVacancy.splice(deletedVacancy-1,1)
        
        break;
      case '6':
        //Sair
        alert ('Saindo do sistema')        
        break;
    
      default:
        alert('opção invalida!')
        break;
    }
    
  } while (menu != 6);
  
}