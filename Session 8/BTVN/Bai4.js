const players = [
  "Messi - Forward - 25",
  "Ronaldo - Forward - 30",
  "Neymar - Forward - 18",
  "De Bruyne - Midfielder - 8",
  "Kante - Midfielder - 2",
  "Van Dijk - Defender - 5",
  "Alisson - Goalkeeper - 0"
];

const getReversedNames = (players) => {
  const names = players.map((player) => {
    const parts = player.split(" - ");
    const name = parts[0];
    return name;
  });

  const reversedNames = names.slice();
  reversedNames.reverse();

  return reversedNames;
};

console.log(getReversedNames(players));
