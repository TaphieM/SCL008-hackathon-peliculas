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
                          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>\
                          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>\
                          <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>\
                          <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>\
                          <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>\
                        </ol>\
                         <div class="carousel-inner">\
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">\
            <ol class="carousel-indicators">\
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>\
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>\
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>\
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>\
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>\
              <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>\
              <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>\
              <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>\
              <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>\
              <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>\
              <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>\
            </ol>\
            <div class="carousel-inner">\
              <div class="carousel-item active">\
                <img class="d-block mx-auto" style="width: 900px; height:400px;" src="http://img.fenixzone.net/i/wQ3BxJh.jpeg" alt="slide 1">\
                <div class="carousel-caption d-none d-md-block">\
                    <h5>El joven manos de tijera</h5>\
                    <p>(1990)</p>\
                  </div>\
              </div>\
              <div class="carousel-item">\
                <img class="d-block mx-auto" style="width: 900px; height:400px;" src="http://img.fenixzone.net/i/xXGtYQK.png" alt="slide 2">\
                <div class="carousel-caption d-none d-md-block">\
                    <h5>El silencio de los inocentes</h5>\
                    <p>(1991)</p>\
                  </div>\
              </div>\
              <div class="carousel-item">\
                <img class="d-block mx-auto" style="width: 900px; height:400px;" src="http://img.fenixzone.net/i/S1Cq70Z.jpeg" alt="slide 3">\
                <div class="carousel-caption d-none d-md-block">\
                    <h5>Forrest Gump</h5>\
                    <p>(1994)</p>\
                  </div>\
              </div>\
            <div class="carousel-item">\
                <img class="d-block mx-auto" style="width: 1000px; height:400px;" src="http://img.fenixzone.net/i/gEvWsTX.jpeg" alt="slide 4">\
                <div class="carousel-caption d-none d-md-block">\
                    <h5>La lista de Schindler</h5>\
                    <p>(1993)</p>\
                  </div>\
              </div>\
                  <div class="carousel-item">\
                  <img class="d-block mx-auto" style="width: 900px; height:400px;" src="http://img.fenixzone.net/i/rKFUQ4a.jpeg" alt="slide 5">\
                  <div class="carousel-caption d-none d-md-block">\
                      <h5>Jurassic Park</h5>\
                      <p>(1993)</p>\
                    </div>\
                </div>\
                <div class="carousel-item">\
                    <img class="d-block mx-auto" style="width: 900px; height:400px;" src="http://img.fenixzone.net/i/lQaZVfG.jpeg" alt="slide 6">\
                    <div class="carousel-caption d-none d-md-block">\
                        <h5>Mujer Bonita</h5>\
                        <p>(1990)</p>\
                      </div>\
                  </div>\
                  <div class="carousel-item">\
                      <img class="d-block mx-auto" style="width: 900px; height:400px;" src="http://img.fenixzone.net/i/HGa2WPK.jpeg" alt="slide 7">\
                      <div class="carousel-caption d-none d-md-block">\
                          <h5>Seven: Los siete pecados capitales</h5>\
                          <p>(1995)</p>\
                        </div>\
                    </div>\
                    <div class="carousel-item">\
                        <img class="d-block mx-auto" style="width: 900px; height:400px;" src="http://img.fenixzone.net/i/IkFhqAO.jpeg" alt="slide 8">\
                        <div class="carousel-caption d-none d-md-block">\
                            <h5>Terminator 2: El juicio final</h5>\
                            <p>(1991)</p>\
                          </div>\
                      </div>\
                      <div class="carousel-item">\
                          <img class="d-block mx-auto" style="width: 900px; height:400px;" src="http://img.fenixzone.net/i/3jcLAXp.jpeg" alt="slide 9">\
                          <div class="carousel-caption d-none d-md-block">\
                              <h5>Trainspotting</h5>\
                              <p>(1996)</p>\
                            </div>\
                        </div>\
                        <div class="carousel-item">\
                            <img class="d-block mx-auto" style="width: 900px; height:400px;" src="http://img.fenixzone.net/i/Zh4Due0.jpeg" alt="slide 10">\
                            <div class="carousel-caption d-none d-md-block">\
                                <h5>Matrix</h5>\
                                <p>(1999)</p>\
                              </div>\
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
});
