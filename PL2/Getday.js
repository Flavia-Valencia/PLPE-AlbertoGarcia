let fecha = new Date();

let diaSemana = fecha.getDay();
let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
let  nombreDia = dias[diaSemana]
console.log(`${nombreDia}`);

