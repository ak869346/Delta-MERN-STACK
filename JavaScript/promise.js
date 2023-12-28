// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internetSpeed > 4) {
//         success();
//         // console.log("Data Saved");
//     }
//     else {
//         // console.log("Weak Connection Data not saved");
//         failure();
//     }
// }

// saveToDb("Apna India",
//     () => {
//         console.log("Success! Data Saved");
//         saveToDb("Virat Kohli",
//             () => {
//                 console.log("Success! Data2 Saved");
//                 saveToDb("Zakhir Khan",
//                     () => {
//                         console.log("Success! Data3 Saved");
//                     },
//                     () => {
//                         console.log("Failue! Weak Connection Data not saved");
//                     })
//             },
//             () => {
//                 console.log("Failure! Weak Connection Data not saved");
//             })
//     },
//     () => {
//         console.log("Failure! Weak Connection Data not saved");
//     })


    // Refactoring with Promise

    function saveToDb(data) {
        return new Promise((resolve,reject)=>{
            let internetSpeed = Math.floor(Math.random() * 10) + 1;
            if(internetSpeed>4) {
                resolve("Success! Data was saved");
            }
            else{
                reject("Failue ! Weak Connection");
            }
        });
    }


    // saveToDb("Apna India");


    // then and catch in promise

    // let request = saveToDb("Apna Bharat");

    // request.then(()=>{
    //     console.log("Promise resolved");
    //     console.log(request);
    // })
    // .catch(()=>{
    //     console.log("Promise rejected");
    //     console.log(request);
    // })


    // Promise Chaining...

    saveToDb("India")
        .then((result)=>{
            console.log("Data1 Saved!");
            console.log("Result is: ",result);
            return saveToDb("Bharat")
        })
        .then((result)=>{
            console.log("Data2 Saved");
            console.log("Result is: ",result);
            return saveToDb("China");
        })
        .then((result)=>{
            console.log("Data3 Saved");
            console.log("Result is: ",result);
        })
        .catch((error)=>{
            console.log("Promise rejected");
            console.log("Error is: ",result);
        })



   