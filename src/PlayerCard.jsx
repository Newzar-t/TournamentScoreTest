import React from 'react';

function PlayerCard({player, result, position})
{
    return (
        <div className="player-card" id={position}>
            <h1>{player}</h1>
            <h2>Score : {result}</h2>
           </div>
    )
}

export default PlayerCard;