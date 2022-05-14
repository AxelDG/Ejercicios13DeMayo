/*let miArreglo : string [] = new Array (12)

miArreglo [0] = "Enero";
miArreglo [1] = "Febero";
miArreglo [2] = "Marzo";
miArreglo [3] = "Abril";
miArreglo [4] = "Mayo";
miArreglo [5] = "Junio";
miArreglo [6] = "Julio";
miArreglo [7] = "Agosto";
miArreglo [8] = "Septiembre";
miArreglo [9] = "Octubre";
miArreglo [10] = "Noviembre";
miArreglo [11] = "Diciembre";

console.log(miArreglo); */

/*let num: number[] = new Array(7);

num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;

let indice: number = 0;
while (indice < 7) {
  console.log("El numero en la posicion " + indice + " es " + num[indice]);

  indice++;
}*/

/*let numeroDeseadoArreglo: number[] = new Array(5);

let nro: number;
let indice: number;

for (indice = 0; indice < 5; indice++) {
  nro = prompt("Ingrese el numero que desea poner en la posicion ", indice++);
  numeroDesadoArreglo[indice] = nro;
}

for (indice = 0; indice < 5; indice++) {
  console.log(
    "El numero en el arreglo " + indice + " es " + numeroDeseadoArreglo[indice]
  );
}*/

/*let dimensionArreglo: number = Number(prompt("Ingrese la cantidad de nombres"));

let arregloNombres: string[] = new Array(dimensionArreglo);
let indice: number;

for(indice = 0; indice < dimensionArreglo; indice++){
  arregloNombres[indice] = prompt("Ingrese nombre para la posicion", indice);
}

for(indice = 0; indice < dimensionArreglo; indice++){
  console.log("El nombre en la posicion " + indice + " es " + arregloNombres[indice]);*/

/*let arregloNombres: string[] = new Array(3);
  let arregloNumeros: number[] = new Array(2);
  let indice:number;

  for(indice=0; indice < arregloNombres.length; indice++){
    arregloNombres[indice] = prompt("Ingrese nombre para la posicion" + indice);
  }
  
  for(indice=0; indice < 3; indice++){
    console.log("El numero en la posicion " + indice + " es " + arregloNumeros[indice]);
  }
  
  for(indice=0; indice < 2; indice++){
    console.log("El nombre en la posicion " + indice + " es " + arregloNombres[indice]);
  }*/

/*let dimensionArreglo: number = Number(prompt("ingrese logitud del arreglo"));
let arregloNumeros: number[] = new Array(dimensionArreglo);
let indice: number;
let sumaTotal: number = 0;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arregloNumeros[indice] = Number(
    prompt("ingrese numero para la posicion " + indice)
  );
  sumaTotal += arregloNumeros[indice];
}

console.log("la suma de todos los elementos del arreglo  es " + sumaTotal);*/

// Arreglo crear arreglo con numeros random

/*let indice: number;
let arregloRandom: number[] = new Array(10);

function Azar(tope: number): number {
  return Math.floor(Math.random() * tope);
}

for (indice = 0; indice < 10; indice++) {
  arregloRandom[indice] = Azar(100);
}

for (indice = 0; indice < 10; indice++) {
  console.log(
    "el numero en la posicion " + indice + " es " + arregloRandom[indice]
  );
}*/
