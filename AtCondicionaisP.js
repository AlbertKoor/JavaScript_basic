//ex1

let A = 10;
let B = 20;
let C = 30;


if (A + B <= C){
    console.log("A soma de A + B é menor que C");
}
else{
    console.log("A soma de A + B é maior que C ")
}

//ex2

let num = 15;

if (num % 2 == 0){
    console.log("O número " + num + " é par")
}
else{
    console.log("O numéro "+ num + " é impar")
}

//ex3
let bool1 = true;
let bool2 = false;

if (bool1 && bool2){
    console.log("Ambas condições são verdadeiras")
}
else if(!bool1 && !bool2){
    console.log("Ambas condições são falsas")
}
else{
    console.log("Um valor é verdadeiro e o outro falso")
}

//ex4

let num1 = 3;
let num2 = 6;
let num3 = 9;

if (num1 > num2 > num3){
    console.log("Está em ordem Crescente")
}
else{
    console.log("Está em ordem Decrescente")
}

//ex5
let valorRec = 11;
let valorRec2 = 32;

if( valorRec > valorRec2){
    alert("O maior valor é :" + valorRec)
}
else{
    alert("O maior valor é: " + valorRec2)
}