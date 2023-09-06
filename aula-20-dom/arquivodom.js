const id1 = document.getElementById('teste1');
console.log(id1);


const classe = document.getElementsByClassName('ClasseA');

console.log(classe);

classe[0].innerHTML = 'Teste innerHTML';

const botao1 = document.getElementById('botao1')

botao1.addEventListener('click',() => {
    console.log('botao Foi clicado')
})



const aluno = {
    nome:'Victor'
}

function Clicando (){
    console.log('O botao Foi clicado pelo onclick')

}
botao1.onclick =  Clicando
// On click pode ser aplicado em qualquer ID/Seletor.

botao1.addEventListener('click',Clicando)


//  query selector vc aplica como se fosse o CSS mesmo, no caso abaixo vai aplicar ao botão
// Funçoes anonimas arrow function é apenas para otimizar (nao possuem)


document.querySelector('button').addEventListener('click',() => {
    document.querySelector('button').style.backgroundColor = 'black'
    document.querySelector('button').style.color = 'white'
    alert('Alterada a cor')
})

const form = document.querySelector('#form-principal')
console.log(form)
form.addEventListener('submit',() => {



})

