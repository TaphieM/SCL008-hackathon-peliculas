
let searchBtn = document.getElementById('search');

let selectedGenre= document.getElementById("selectGenre")

/*Guardo en una variable el valor del indice seleccionado por el usuario
let actualGenre=selectedGenre.options[selectedGenre.selectedIndex].value;*/
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

const showFirstScreen=()=>{

    init.style.display = "block"; 
    actionScreen.style.display ="none";

}

actionScreen.addEventListener('click', () => {
    document.getElementById('carouselExampleIndicators').style.display = 'none';
    document.getElementById('actionScreen').style.display = 'block';
  
  
  });
  
  showFirstScreen();