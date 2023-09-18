function render(transacaoDados){
  const transacao = document.createElement('tr')
  transacao.classList.add('transação')
  transacao.id = `transacao-${transacaoDados.id}`

  const data = document.createElement('td')
  data.classList.add('data')
  data.textContent = transacaoDados.data

  const valor = document.createElement('td')
  valor.classList.add('valor')
  valor.textContent = transacaoDados.valor

  const descricao = document.createElement('td')
  descricao.classList.add('descricao')
  descricao.textContent = transacaoDados.descricao

  const deletar = document.createElement('button')
  deletar.textContent ='deletar'
  deletar.addEventListener('click',deletarTransacao)

  const alterar = document.createElement('button')
  alterar.textContent ='alterar'
  alterar.addEventListener('click',alterarTransacao)

  transacao.append(data, valor, descricao, alterar, deletar)

  document.querySelector('#receber').appendChild(transacao)
}

async function acessarURL(){
  console.log('acessar URL entrou');
  const transacoes = await fetch('http://localhost:3000/transacao').then(res => res.json())

  transacoes.forEach(render);  
}

document.addEventListener('DOMContentLoaded', () => {acessarURL()})

const form = document.querySelector('form')
form.addEventListener('submit',async ev=>{
  ev.preventDefault()

  const transacaoDados = {
    data:document.querySelector("input#data").value,
    valor: document.querySelector('input#valor').value,
    descricao: document.querySelector('input#descricao').value
  }

  const resposta = await fetch('http://localhost:3000/transacao',{
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transacaoDados)

  })

  const transacaoSalva = await resposta.json()
  form.reset()
  render(transacaoSalva)
})

async function deletarTransacao(ev){

  const id = ev.target.closest('tr').id
  const idSplit = id.split('-')
  console.log(idSplit[1]);

  ev.target.closest('tr').remove()
  
  const deletar = await fetch(`http://localhost:3000/transacao/${idSplit[1]}`,{
    method:'DELETE',    
    headers: {
      'Content-Type': 'application/json'
    }
  })

}

async function alterarTransacao(ev){
  const id = ev.target.closest('tr').id.split('-')[1]

  console.log(id);

  ev.target.closest('tr').remove()

  const transacaoDados = {
    data:document.querySelector("input#data").value,
    valor: document.querySelector('input#valor').value,
    descricao: document.querySelector('input#descricao').value
  }

  const transacaoModificada = await fetch(`http://localhost:3000/transacao/${id}`,{
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transacaoDados)
  })

  render(await transacaoModificada.json())
  form.reset()

}