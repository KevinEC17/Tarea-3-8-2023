let filtro

let datosAPI

let weather = document.getElementById("#weather");

fetch("https://www.el-tiempo.net/api/json/v2/home")
    .then((response) => response.json())
    .then((data) => {
        datosAPI = data
    })

function search(){
    let valueInput = document.getElementsByClassName("nCiudad");
    valueInput = valueInput[0].value;
   
    let stateFiltro = datosAPI.ciudades.filter((name) => name.name == valueInput);
    for (state of stateFiltro){
        console.log("El clima en " + valueInput + " es " + state.stateSky.description);
    }
    let tempFiltro = datosAPI.ciudades.filter((name) => name.name == valueInput);
    for (tempF of tempFiltro){
        console.log("Con una temperatura máxima de " + tempF.temperatures.max);
    }
    for (tempF of tempFiltro){
        console.log("Y con una temperatura mínima de " + tempF.temperatures.min);
    }
}

function validation(){
    try {
        let valueInput = document.getElementsByClassName("nCiudad");
        valueInput = valueInput[0].value;

        if (valueInput == ""){
            console.log("Ingreso en blanco");
        }
        else{
            search();
        }
    } catch (error) {
        console.log("Error")
    }
}

