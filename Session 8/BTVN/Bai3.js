const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper"
];

const filterPlayersByPosition = (position, players) => {
  const filteredPlayers = players.filter((player) => {
    const parts = player.split(" - ");
    const playerPosition = parts[1];
    const isMatch = playerPosition === position;
    return isMatch;
  });

  return filteredPlayers;
};

console.log(filterPlayersByPosition("Midfielder", players));
console.log(filterPlayersByPosition("Forward", players));
