fetch('https://api.deezer.com/album/302127')
// fetch liga na API com comando de Get, para utilizar com Post -> method: "POST",
.then(response => response.json())
// Response json traz o resultado em json
.then(response => {
    response.data.forEach((album)=>
    
    console.log(album.title))



}) 



