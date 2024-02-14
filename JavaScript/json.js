let jsonRes = '{"name":"John", "age":30, "city":"New York"}';
console.log(jsonRes);

let validResp = JSON.parse(jsonRes);
console.log(validResp);
console.log(validResp.name);


let student = {
    name:"Ankit",
    marks:34
};

let studentJson = JSON.stringify(student);
console.log(studentJson);