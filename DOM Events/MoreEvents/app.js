let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change",function(){
    console.log("Change Event");
    console.log("Final Value: ",user.value);
});

user.addEventListener("input",function(){
    console.log("Input Event");
    console.log("Final Value: ",user.value);
});

