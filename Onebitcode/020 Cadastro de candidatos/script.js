let menu = ''

function startProgram() {

  

  do {
    

    menu = prompt('***Menu***\n\n    1. Listar vagas disponíveis\n    2. Criar nova vaga\n    3. Visualizar uma vaga\n    4. Inscrever candidato em uma vaga\n    5. Excluir uma vaga\n    6. Sair')
    switch (menu) {
      case '1':
        //Listar vagas
        
        break;
      case '2':
        //Criar nova vaga
        
        break;
      case '3':
        //Visualizar uma vaga
        
        break;
      case '4':
        //Inscrever um candidato a vaga
        
        break;
      case '5':
        //Excluir uma vaga
        
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