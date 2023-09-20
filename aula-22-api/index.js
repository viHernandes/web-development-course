fetch('https://api.deezer.com/album/302127')
// fetch liga na API com comando de Get, para utilizar com Post -> method: "POST",
.then(response => response.json())
// Response json traz o resultado em json
.then(response => console.log(response) )

// Tweak -> ferramenta web para poder "simular" endpoints de API.


// fetch('link API',
//         'method: "POST"'
// )
// // Esse modelo faz um Post, para utilizar com Post -> method: "POST",
// .then(response => response.json())
// // Response json traz o resultado em json
// .then(response => console.log(response) )
