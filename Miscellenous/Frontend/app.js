let arr = [1,2,3];

let arr2 = [1,2,3,4];
arr.sayHello = ()=> {
    console.log("Hello I am Arr");
};


function Personmaker(name,age) {

    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi my name is ${this.name}`);
        }
    }

    return person;
};


