import { useState } from "react";
function LudoBoard() {
    let blueStyle = {backgroundColor:"Blue"};
    let yellowStyle = {backgroundColor:"yellow"};
    let greenStyle = {backgroundColor:"green"};
    let redStyle = {backgroundColor:"red"};
    let [bluecount,setBlueCount] = useState(0);
    let [yellowcount,setYellowCount] = useState(0);
    let [greencount,setGreenCount] = useState(0);
    let [redcount,setRedCount] = useState(0);

    let changeBlueCount = ()=> {
        setBlueCount(bluecount+1);
    }
    let changeYellowCount = ()=> {
        setYellowCount(yellowcount+1);
    }
    let changeGreenCount = ()=> {
        setGreenCount(greencount+1);
    }
    let changeRedCount = ()=> {
        setRedCount(redcount+1);
    }
    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves = {bluecount}</p>
                <button style={blueStyle} onClick={changeBlueCount}>+1</button>
                <p>Yellow moves = {yellowcount}</p>
                <button style={yellowStyle} onClick={changeYellowCount}>+1</button>
                <p>Green moves = {greencount}</p>
                <button style={greenStyle} onClick={changeGreenCount}>+1</button>
                <p>Red moves = {redcount}</p>
                <button style={redStyle} onClick={changeRedCount}>+1</button>
            </div>
        </div>
    );
}

export default LudoBoard;