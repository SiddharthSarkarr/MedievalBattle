export const classAdvantage = {
  Militia: ["Spearmen", "LightCavalry"],
  Spearmen: ["LightCavalry", "HeavyCavalry"],
  LightCavalry: ["FootArcher", "CavalryArcher"],
  HeavyCavalry: ["Militia", "FootArcher", "LightCavalry"],
  CavalryArcher: ["Spearmen", "HeavyCavalry"],
  FootArcher: ["Militia", "CavalryArcher"]
};

export const getOutcome = (yourClass, yourCount, enemyClass, enemyCount) => {
  if (classAdvantage[yourClass]?.includes(enemyClass)) {
    return yourCount * 2 > enemyCount
      ? "Win"
      : yourCount * 2 === enemyCount
      ? "Draw"
      : "Lose";
  } else if (classAdvantage[enemyClass]?.includes(yourClass)) {
    return yourCount > enemyCount * 2
      ? "Win"
      : yourCount === enemyCount * 2
      ? "Draw"
      : "Lose";
  } else {
    return yourCount > enemyCount
      ? "Win"
      : yourCount === enemyCount
      ? "Draw"
      : "Lose";
  }
};

export const evaluateArrangement = (own, enemy) => {
  let winCount = 0;
  const result = [];

  for (let i = 0; i < 5; i++) {
    const outcome = getOutcome(own[i].class, own[i].count, enemy[i].class, enemy[i].count);
    if (outcome === "Win") winCount++;
    result.push({ your: own[i], enemy: enemy[i], outcome });
  }

  return { winCount, result };
};
