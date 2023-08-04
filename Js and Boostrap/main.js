let nombre = "nombre";
const apellido = "-";
/*
console.log(apellido);


for(let i = 0; i<10;i++){
    console.log(i);
}

map = [1,2,3,4]

//Iterar Objetos
for (items of map) {
    console.log(items)
}


edad = 15

if (edad < 18){
    console.log("Es menor a 18");
} else if (edad = 18){
    console.log("Es igual a 18");
} else {
    console.log("Es mayor a 18");
}

while (edad < 20){
    edad++;
    console.log("Su edad es: " + edad)
}
*/
let filtro

let datosAPI

let valueInput = document.getElementsByClassName("nCiudad");

valueInput = valueInput[0].value;

fetch("https://www.el-tiempo.net/api/json/v2/home")
    .then((response) => response.json())
    .then((data) => {
        datosAPI = data
        filtro = datosAPI.ciudades.filter((temp) => temp.temperatures.min < 20)
        /*for (cuidad of filtro){
            console.log("La ciudad con temperatura mayor a 20° es: " + cuidad.name);
        }*/
    })

function buscar(param){
    let filter1 = datosAPI.ciudades.filter((name) => name.name == param);
    for (state of filter1){
        console.log(state.stateSky.description);
    }
}

function search(){
    let valueInput = document.getElementsByClassName("nCiudad");
    valueInput = valueInput[0].value;

    let stateFiltro = datosAPI.ciudades.filter((name) => name.name == valueInput);
    for (state of stateFiltro){
        console.log(state.stateSky.description);
    }
}