const Enviar = document.getElementById('enviar')
const Visualizar = document.getElementById('visualizar')
const Limpar = document.getElementById('limpar')
const Conteudo = document.getElementsByClassName('desafio')

let tarefas = [];

Enviar.addEventListener('click',() => {
   
    tarefas.push(Conteudo[0].value)
    Conteudo[0].value = ''

})

Visualizar.addEventListener('click',() => {
    console.log(tarefas)
})


Limpar.addEventListener('click',() => {
        tarefas = []
})


document.getElementsByClassName('teste')[0].addEventListener('mouseover',() => {
    console.log(document.getElementsByClassName('teste')[0].innerHTML)

})