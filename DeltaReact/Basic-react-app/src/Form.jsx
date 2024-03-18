function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form was Submitetd");
}

function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Write Something"/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;