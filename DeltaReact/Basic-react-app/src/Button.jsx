function printHello(event) {
    console.log("Hello");
    console.log(event);
}

function printBye() {
    console.log("Bye");
}

function handleMouseOver() {
    console.log("Bye Bye");
}

function handleDbClick() {
    console.log("Handle Double click");
}

function Button() {
    return (
        <div>
            <button onClick={printHello}>click me!</button>
            {/* <p onClick={printBye}>This is for Event Demo</p>
            <p onMouseOver={handleMouseOver}>Lorem, ipsum dolor sit amet consectetur Inventore, id.</p>
            <button onDoubleClick={handleDbClick}>Double Click me!</button> */}
        </div>
    );
}

export default Button;