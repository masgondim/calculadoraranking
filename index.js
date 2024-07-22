var nivel = prompt("Qual o seu nível?");
var vitorias = prompt("Quantas vitórias você tem?");
var derrotas = prompt("Quantas derrotas você tem? ");
var saldoVitorias;

saldoVitorias = vitorias - derrotas;

if (saldoVitorias >= 0 && saldoVitorias <= 10){
console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Ferro");
} else if (saldoVitorias >= 11 && saldoVitorias <= 20){
console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Bronze");
} else if (saldoVitorias >= 21 && saldoVitorias <= 50){
console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Prata");
} else if (saldoVitorias >= 21 && saldoVitorias <= 80){
console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Ouro");
} else if (saldoVitorias >= 81 && saldoVitorias <= 90){
console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Diamante");
} else if (saldoVitorias >= 91 && saldoVitorias <= 100){
console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Lendário");
} else if (saldoVitorias >= 101){
console.log("O herói tem saldo de " + saldoVitorias + " está no nível de Imortal");
}