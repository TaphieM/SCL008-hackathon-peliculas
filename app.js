const actionMovies= ['tt0103064','tt0133093','tt0110413','tt0106977','tt0102685','tt0107290','tt0113277','tt0120815','tt0137523','tt0111257']
const dramaMovies=['tt0102926','tt0110912','tt0118799','tt0108052','tt0117951','tt0111161','tt0109830','tt0099487','tt0120382','tt0169547']
const comedyMovies=['tt0109040','tt0163651','tt0118655','tt0099785','tt0188052','tt0107048','tt0109707','tt0118715','tt0129387','tt0128445']
const movies=[];

const actionSection = document.getElementById('init');
const actionData= () =>{
    for(let i=0; i<actionMovies.length;i++){
    fetch('http://www.omdbapi.com/?i=' + actionMovies[i] + '&apikey=fe2ab715')
    .then (data => data.json())
    .then (data => {
    
       document.getElementById('init').innerHTML += 

       `<div class="col-md-2">\
       <div class="card" style="width: 18rem;">\
       <img src="${data.Poster}" class="card-img-top" alt="...">\
       <div class="card-body">\
         <h5 class="card-title">${data.Title}</h5>\
        <span class="card-text">Calificación: ${data.imdbRating}</span>\
       </div>\

  
       </div>\
     </div>`
    })
    }
} 

//Función que sirve para imprimir data



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




fetch('http://www.omdbapi.com/?s="movie"&apikey=fe2ab715')
.then(res=>res.json())
.then(data=> {
console.log(data)
})


