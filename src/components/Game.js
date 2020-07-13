import React, { Component } from 'react';
import Timer from "./Timer";
import "./Game.css";


//ALLOWS GAMES TO BE FOUND THROUGH ID
// const Game = (props) => {
//     const id = props.match.params.id
//     const game = games.find(c => c.id == id)

//                 <h2>{game.Name}</h2>
//                 {
//                     Object.keys(game).map((key, idx) => {
//                         return <Chip label={`${key}: ${game[key]}`}></Chip>
//                     })
//                 }



class Game extends Component {
    render() {
        return (
            <div className ="containerG">
                <Timer />
            </div>
        );
    }
}

export default Game;
