function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  
function sortingArray() {
  return `Os números ${oddsAndEvens.sort(function(a, b){return a - b})} se encontram ordenados de forma crescente!.`
}

  console.log(sortingArray());

let arrayOfNumbers = [];

function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (arrayOfNumbers[n] > 0)
    return arrayOfNumbers[n];
  return arrayOfNumbers[n] = factorial(n-1) * n;
}
console.log(factorial(4));