// Console Log = Mostra no Console o texto
console.log('Teste')
// Const atribui uma variavel;

const minhaDiv = document.getElementById('minhadiv')

console.log(minhaDiv)

// get element pega o elemento por id/class/seletor

function mostrandoescopo(){
// Function cria uma função
    var minhaVariavelDentroDeUmaFuncao = 'Mostrando o Escopo'
    console.log(minhaVariavelDentroDeUmaFuncao)

}
mostrandoescopo()


for (index = 1; index <= 10; index++) {
    console.log("9x "+ index + "=" + (9*index))
    
}


let array = ['Victor','Carlos']

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}

let i = 0;

while (i < array.length){
    console.log(array[i]);
    i+=1;

}