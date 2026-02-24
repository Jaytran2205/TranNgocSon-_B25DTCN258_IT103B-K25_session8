const playerNames = [
  "Messi",
  "Ronaldo",
  "Neymar",
  "De Bruyne",
  "Kante",
  "Van Dijk",
  "Alisson"
];

const getUpperNames = (playerNames) => {
  const upperNames = playerNames.map((name) => {
    const upperName = name.toUpperCase();
    return upperName;
  });

  return upperNames;
};

console.log(getUpperNames(playerNames));

