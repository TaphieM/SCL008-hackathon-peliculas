const actionMovies= ['tt0103064','tt0133093','tt0110413','tt0106977','tt0102685','tt0107290','tt0113277','tt0120815','tt0137523','tt0111257']
const dramaMovies=['tt0102926','tt0110912','tt0118799','tt0108052','tt0117951','tt0111161','tt0109830','tt0099487','tt0120382','tt0169547']
const comedyMovies=['tt0109040','tt0163651','tt0118655','tt0099785','tt0188052','tt0107048','tt0109707','tt0118715','tt0129387','tt0128445']
    


const actionData= () =>{
    for(let i=0; i<actionMovies.length;i++){
    fetch('http://www.omdbapi.com/?i=' + actionMovies[i] + '&apikey=fe2ab715')
    .then (data => data.json())
    .then (data => {
    
       document.getElementById('init').innerHTML += 
       `<div class="col-md-4">
       <div class="card" style="width: 18rem;">
  <img src="${data.Poster}" class="card-img-top" alt="..." style="width:150px;"">
  <div class="card-body">
    <h5 class="card-title">${data.Title}</h5>
    <p class="card-text">Calificación: ${data.imdbRating}</p>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Ver más información
</button>
 
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">${data.Title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img src="${data.Poster}" class="card-img-top" alt="..." style="width:150px;"">
         <p class="card-text"> Plot: ${data.Plot}</p>
         <p class="card-text"> Director: ${data.Director}</p>
         <p class="card-text"> Year: ${data.Year}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Ver Trailer</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
      </div>
     </div>`
    })
    }
} 
const dramaData= () =>{
    for(let i=0; i<dramaMovies.length;i++){
    fetch('http://www.omdbapi.com/?i=' + dramaMovies[i] + '&apikey=fe2ab715')
    .then (data => data.json())
    .then (data => {
    
       document.getElementById('init').innerHTML += 

       `<div class="col-md-2">\
       <div class="card"">\
       <img src="${data.Poster}" class="card-img-top" alt="...">\
       <div class="card-body">\
         <h5 class="card-title">${data.Title}</h5>\
        <span class="card-text">Calificación: ${data.imdbRating}</span>\
       </div>\
    
       </div>
  
       </div>\
     </div>`
    })
    }
} 



const comedyData= () =>{
    for(let i=0; i<comedyMovies.length;i++){
    fetch('http://www.omdbapi.com/?i=' + comedyMovies[i] + '&apikey=fe2ab715')
    .then (data => data.json())
    .then (data => {
    
       document.getElementById('init').innerHTML += 

       `<div class="col-md-2">\
       <div class="card"">\
       <img src="${data.Poster}" class="card-img-top" alt="...">\
       <div class="card-body">\
         <h5 class="card-title">${data.Title}</h5>\
        <span class="card-text">Calificación: ${data.imdbRating}</span>\
       </div>\
    
       </div>
  
       </div>\
     </div>`
    })
    }
} 


 







