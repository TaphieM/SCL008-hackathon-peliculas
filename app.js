fetch(http://www.omdbapi.com/?apikey=[fe2ab715]&s=batman)
.then((success) => { success.json() } )
.then((movies) => { console.log(movies) } )
.catch((error)=>{ console.log(error)})