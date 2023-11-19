
//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("Hola Mundo");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hola Mundo");

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write(3+5);

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

let aux = "Hola"
let result = prompt('Ingresa una palabra:');
document.write(`${aux} ${result}`);

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
let a = parseInt(prompt('Ingresa un numero:'));
let b = parseInt(prompt('Ingresa un numero:'));
document.write(a+b);

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let a_ = parseInt(prompt('Ingresa un numero:'));
let b_ = parseInt(prompt('Ingresa un numero:'));
document.write(a_ >= b_ ? a_ : b_);

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let num1 = parseInt(prompt('Ingresa un numero:'));
let num2 = parseInt(prompt('Ingresa un numero:'));
let num3 = parseInt(prompt('Ingresa un numero:'));
if (num1 > num2 && num1 > num3)
  document.write(num1);
else if (num2 > num1 && num2 > num3)
  document.write(num2);
else
  document.write(num3);

//8.- Escribe un programa que pida un número y diga si es divisible por 2
let num1_ = parseInt(prompt('Ingresa un numero:'));

document.write(num1_ % 2 === 0 ? `El ${num1_} es divisible por 2` : `El ${num1_} es divisible por 2`);

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

const phrase = prompt('Ingresa una frase:');
const tam = phrase.length;
let findedVocals = '';

for (let i = 0; i < tam; i++) {
  const letter = phrase.charAt(i);
  if ('aeiou'.includes(letter)) {
    findedVocals += letter;
  }
}
document.write(findedVocals);

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let num_1 = parseInt(prompt('Ingresa un numero:'));

if (num_1 % 2 === 0 || num_1 % 3 === 0 || num_1 % 5 === 0 || num_1 % 7 === 0 ) {
 document.write(`El ${num_1} es divisible por uno de los cuatro XD`);
 
}

//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let num1__ = parseInt(prompt('EX 11 Ingresa un numero:'));
let nums = [2,3,5,7];
let result_ = [0,0,0,0];

if (num1__ % 2 == 0)
  result_[0] = 1;
if (num1__ % 3 == 0)
  result_[1] = 1;
if (num1__ % 5 == 0)
  result_[2] = 1;
if (num1__ % 7 == 0)
  result_[3] = 1;

let text_ = "";
for (let index = 0; index < result_.length; index++) {
  const element = result_[index];
  if (element === 1 && text_ === "")
    text_ += `El ${num1__} es divisible por ${nums[index]}`;
  else if (element === 1 &&  index !== (result_.length - 1))
   text_ += `, por ${nums[index]}`;
  else if (element === 1 && index === (result_.length - 1)){
    if (text_ === "")
      text_ += `El ${num1__} es divisible por ${nums[index]}`;
    else 
      text_ += ` y por ${nums[index]}`;
  }
}
document.write(text_);








