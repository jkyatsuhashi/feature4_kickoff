export default function Child({ playerData }) {
    return (
      <div>
        <h2>Player Data</h2>
        <ul>
          {playerData.map((player, index) => (
            <li key={index}>
              Name: {player.name} | Games Played: {player.gamesPlayed} | Goals: {player.goals} | Assists: {player.assists} | Points: {player.assists + player.goals}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  