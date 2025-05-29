import PlayerCard from "./PlayerCard";
import React from "react";

const TournamentList = [
    { player: "Sorata", result: 1, position: 1 },
    { player: "Aiko", result: 2, position: 7 },
    { player: "Ren", result: 3, position: 3 },
    { player: "Kaito", result: 4, position: 4 },
    { player: "Mika", result: 5, position: 5 },
    { player: "Yuna", result: 6, position: 6 },
    { player: "Takeshi", result: 7, position: 2 },
    { player: "Hana", result: 8, position: 8 },
    { player: "Sora", result: 9, position: 9 },
    { player: "Naoki", result: 10, position: 10 },
]

function TournamentGrid() {
      const sortedList = [...TournamentList].sort((a, b) => a.position - b.position);

    return (
        <div className="tournament-grid">
            {sortedList.map((playerData) => (
                <PlayerCard
                    key={playerData.position}
                    player={playerData.player}
                    result={playerData.result}
                    position={playerData.position}
                />
            ))}
        </div>
    );
}
export default TournamentGrid;