import { useState } from "react";
function ApnaLudo() {
    let blueStyle = {backgroundColor:"Blue"};
    let yellowStyle = {backgroundColor:"yellow",color:"black"};
    let greenStyle = {backgroundColor:"green"};
    let redStyle = {backgroundColor:"red"};

    let [moves,setMoves] = useState({blue:0,yellow:0,green:0,red:0});

    let updateBlue = ()=> {
        setMoves((prevMoves)=> {
            return {...prevMoves,blue:prevMoves.blue+1};
        });
    }
    let updateYellow = ()=> {
        setMoves((prevMoves)=> {
            return {...prevMoves,yellow:prevMoves.yellow+1};
        });
    }
    let updateGreen = ()=> {
        setMoves((prevMoves)=> {
            return {...prevMoves,green:prevMoves.green+1};
        });
    }
    let updateRed = ()=> {
        setMoves((prevMoves)=> {
            return {...prevMoves,red:prevMoves.red+1};
        });
    }
    return (
        <div>
            <p>Game Begins.</p>
            <div className="board">
                <p>Blue moves = {moves.blue} </p>
                <button style={blueStyle} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={yellowStyle} onClick={updateYellow}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={greenStyle} onClick={updateGreen}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={redStyle} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}

export default ApnaLudo;