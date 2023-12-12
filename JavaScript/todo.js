let todo = [];

let req = prompt("Please enter your request");

while(true) {
    if(req=="quit") {
        console.log("Quitting the app");
        break;
    }

    if(req=="list") {
        console.log("-------------");
        for(let i=0;i<todo.length;i++) {
            console.log(i,todo[i]);

        }
        console.log("-------------");
    }
    else if(req=="add") {
        let task = prompt("Please enter the task which you want to do");
        todo.push(task);
        console.log("task added");
    }

    else if(req=="delete") {
        let indx = prompt("Please enter the task index");
        todo.splice(indx,1);
        console.log("task deleted");
    }
    else {
        console.log("Wrong request");
    }
    req = prompt("Please enter your request");
}