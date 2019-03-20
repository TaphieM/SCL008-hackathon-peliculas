
const actionMovies= ['tt0103064','tt0133093','tt0110413','tt0106977','tt0102685','tt0107290','tt0113277','tt0120815','tt0137523','tt0111257']
const dramaMovies=[]
const terrorMovies=[]
const thrillerMovies=[]
const romanceMovies=[]
const comedyMovies=[]
const sciFiMovies=[]




for(let i=0; i<actionMovies.lenght;i++){
    let p=actionMovies[i]

    const movie[i]=fetch('http://www.omdbapi.com/?i='+ p + '&apikey=fe2ab715')
    .then (data => data.json())
    .then (data => {
        console.log(data)
    })  
 
}



var randomNumber=

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


