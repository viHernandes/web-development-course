const pessoas ={
    "nome":"Victor"
    , "cachorros":["Nick","Snow"]
}


const pessoasJson = JSON.stringify(pessoas) 
// Stringify transforma em JSON a string.

console.log(pessoasJson)

// const lerPessoas = localStorage.getItem('nome')


localStorage.setItem("testando-ls","eh so um teste")


sessionStorage.setItem("testando-ss","eh soh um teste")
const pessoasParseado = JSON.parse(pessoasJson)
console.log(pessoasParseado.cachorros)


//  Local Storage e Session Storage - Dentro de Application 
// Session Storage -> salva durante a sessão do navegador aberto. 