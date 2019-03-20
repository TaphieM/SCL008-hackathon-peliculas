
const actionMovies= ['tt0103064','tt0133093','tt0110413','tt0106977','tt0102685','tt0107290','tt0113277','tt0120815','tt0137523','tt0111257']
const dramaMovies=[]
const terrorMovies=[]
const thrillerMovies=[]
const romanceMovies=[]
const comedyMovies=[]
const sciFiMovies=[]
var movie=[];


//Macro para generar las 10 posiciones de la pantalla por filtro de genero
for(let i=0; i<actionMovies.lenght;i++){
    //p -> es la posición dentro de los ID del genero seleccionado 
    let p=actionMovies[i]
    //En cada movie[i] vamos a guardar el resultado de la API filtrando el ID
       //Pendiente ir a buscar sólo los valores necesarios (Imagen,nombre, año, director, etc...)
    movie[i]=fetch('http://www.omdbapi.com/?i='+ p + '&apikey=fe2ab715')
    .then (data => data.json())
    .then (data => {
        //Por fines de prueba la acción resultante es imprimir los valores en consola
        //Esto deberá cambiarse por imprimir la imagen o información de cada pelicula
        console.log(data)
    })  
 
}




const enterData= () =>{
    
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=fe2ab715')
    .then (data => data.json())
    .then (data => {
        console.log(data)
    })
}

fetch('http://www.omdbapi.com/?s="movie"&apikey=fe2ab715')
.then(res=>res.json())
.then(data=> {
console.log(data)
})


