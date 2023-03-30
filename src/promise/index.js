const promise = new Promise (function(resolve, reject){
    resolve('Hola ITSJ')
})
// Promesa tiene 3 estados Pendiente, cumplido, rechazo
const vacas = 11;
const contarVacas = new Promise(function(resolve, reject){
    if (vacas > 10){
        resolve(`Tienes ${vacas} vacas en la granja`);
    } else {
        reject("No tienes la cantidad suficiente de vacas en la granaja");
    }
})

contarVacas.then((result)=>{
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(()=>console.log('Fin de la promesa'));