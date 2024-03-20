function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function diceGameSimulation(numSimulation) {
  const simulationRes = [];
  for (let i = 0; i < numSimulation; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;
    const result =
      sum === 7 || sum === 11
        ? 'win'
        : sum === 2 || sum === 3 || sum === 12
        ? 'lose'
        : 'roll again';
    const res = {
      dice1,
      dice2,
      sum,
      result,
    };
    simulationRes.push(res);
  }
  return simulationRes;
}

module.exports = diceGameSimulation;
