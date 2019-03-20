/*let searchBtn = document.getElementById('search');
let logoInit = document.getElementById('logo-movie');
let firstScreen =  '\
                      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">\
                        <ol class="carousel-indicators">\
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>\
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>\
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>\
                          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>\
                          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>\
                          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>\
                        </ol>\
                        <div class="carousel-inner">\
                          <div class="carousel-item active ">\
                            <img class="d-block mx-auto" style="width: 1000px; height:500px;" src="http://img.fenixzone.net/i/smSwLM4.png" alt="First slide">\
                          </div>\
                          <div class="carousel-item">\
                            <img class="d-block mx-auto" style="width: 1000px; height:500px;" src="http://img.fenixzone.net/i/AOwdNLD.jpeg" alt="Second slide">\
                          </div>\
                          <div class="carousel-item">\
                            <img class="d-block mx-auto" style="width: 1000px; height:500px;" src="http://img.fenixzone.net/i/UneKRCQ.jpeg" alt="Third slide">\
                          </div>\
                          <div class="carousel-item">\
                            <img class="d-block mx-auto" style="width: 1000px; height:500px;" src="http://img.fenixzone.net/i/5IlUCpT.jpeg" alt="Fourth slide">\
                          </div>\
                          <div class="carousel-item">\
                            <img class="d-block mx-auto" style="width: 1000px; height:500px;" src="http://img.fenixzone.net/i/IjwOYmg.jpeg" alt="FIfth slide">\
                          </div>\
                          <div class="carousel-item">\
                            <img class="d-block mx-auto" style="width: 1000px; height:500px;" src="http://img.fenixzone.net/i/TdJPj6A.jpeg" alt="Sixth slide">\
                          </div>\
                        </div>\
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">\
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
                          <span class="sr-only">Previous</span>\
                        </a>\
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">\
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>\
                            <span class="sr-only">Next</span>\
                        </a>\
                        </div>\
                        <div class= "banner-movil" id="movil">\
                        </div>';
let secondScreen = '\
                    <form>\
                      <div class="form-row margin-select">\
                        <div class="form-group col-md-4">\
                          <label for="exampleFormControlSelect1">Seleccione el año:</label>\
                          <select class="form-control" id="select-year" >\
                            <option value= "none">Ninguno</option>\
                            <option value="1990">1990</option>\
                            <option value="1991">1991</option>\
                            <option value="1992">1992</option>\
                            <option value="1993">1993</option>\
                            <option value="1994">1994</option>\
                            <option value="1995">1995</option>\
                            <option value="1996">1996</option>\
                            <option value="1997">1997</option>\
                            <option value="1998">1998</option>\
                            <option value="1999">1999</option>\
                          </select>\
                        </div>\
                        <div class="form-group col-md-4">\
                          <label for="exampleFormControlSelect1">Seleccione el genero:</label>\
                          <select class="form-control" id="select-type" >\
                            <option value= "none">Ninguno</option>\
                            <option value="genre">Drama</option>\
                            <option value="genre">Accion</option>\
                          </select>\
                        </div>\
                        <div class="form-group col-md-2">\
                          <button class="btn btn-primary font-nav btn-color" id="clean">Limpiar</button>\
                        </div>\
                      </div>\
                    </form>\
                    <div class="row">\
                      <div class="col-md-12">\
                        <div class="card-group" id="id1">\
                         </div>\
                      </div>\
                    </div>';


window.onload = document.getElementById('init').innerHTML = firstScreen;

searchBtn.addEventListener('click', () => {
  document.getElementById('init').innerHTML = "";
  document.getElementById('init').innerHTML = secondScreen;
  
  let cleanBtn = document.getElementById('clean');
 
      cleanBtn.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('select-year').value = "none";
        document.getElementById('select-type').value = "none";
      });
    });


logoInit.addEventListener('click', () => {
  document.getElementById('init').innerHTML = '';
  document.getElementById('init').innerHTML = firstScreen;
});*/
