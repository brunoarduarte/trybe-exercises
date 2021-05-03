const raffleCheck = (myNumber, number) => myNumber === number;

const raffleResult = (myNumber, block) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return block(myNumber, number) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(raffleResult(3, raffleCheck));