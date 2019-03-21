
const actionMovies= ['tt0103064','tt0133093','tt0110413','tt0106977','tt0102685','tt0107290','tt0113277','tt0120815','tt0137523','tt0111257']
const dramaMovies=['tt0102926','tt0110912','tt0118799','tt0108052','tt0117951','tt0111161','tt0109830','tt0099487','tt0120382','tt0169547']
const comedyMovies=['tt0109040','tt0163651','tt0118655','tt0099785','tt0188052','tt0107048','tt0109707','tt0118715','tt0129387','tt0128445']
var movie=[];

const movieCathalog=[];
const enterData= () =>{
    for(let i=0; i<actionMovies.length;i++){
    fetch('http://www.omdbapi.com/?i=' + actionMovies[i] + '&apikey=fe2ab715')
    .then (data => data.json())
    .then (data => {
    
       document.getElementById('action').innerHTML += `<img src="${data.Poster}" class="rounded mx-auto d-block" alt="..."></img>`
    })
    }
} 
enterData();


       /*movieCathalog.forEach(function(element){
            text += `<div class="action">
            <div class="col s12 m6">
             <div class="card">
               <div class="card-image">
                 <img src="${element.Poster}">
                 
                 <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
               </div>
             </div>
           </div>
           </div>`

       });
       action.innerHTML= text;
    })
    .catch(err => console.log(err));
}
};*/


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






fetch('http://www.omdbapi.com/?s="movie"&apikey=fe2ab715')
.then(res=>res.json())
.then(data=> {
console.log(data)
})


