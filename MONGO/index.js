const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
// Schema....
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// Models......

// const Employee = mongoose.model("Emoloyee",userSchema);
const User = mongoose.model("User",userSchema);

// const user2 = new User({
//     name:"Eve",
//     email:"eve34@gmail.com",
//     age:56
// })

// user2.save()
//     .then((res)=> {
//         console.log(res);
//     })
//     .catch((err)=> {
//         console.log(err);   
//     });  // saving data to db....

// User.insertMany([
//     {name:"Harshit",email:"harshit123@gmail.com",age:34},
//     {name:"Vikash",email:"vikash123@gmail.com",age:78},
//     {name:"Nishant",email:"nishant123@gmail.com",age:18},
// ]).then((res)=> {
//     console.log(res);
// });

// Find in mongoose...

// User.findOne({age: {$gte:47}})
//     .then((res)=> {console.log(res)
//     })
//     .catch((err)=>{console.log.log(err)});

// User.findById('65e9597802772a08671b3a75')
//     .then((res)=> {console.log(res)
//     })
//     .catch((err)=>{console.log.log(err)});

// User.updateMany({name:"Harshit"},{age:100})
//     .then((res)=> {
//         console.log(res);
//     })
//     .catch((err)=> {
//         console.log(err);
//     });

// User.findOneAndUpdate({name:"Harshit"},{age:26},{new:true})
//     .then((res)=> {
//         console.log(res);
//     })
//     .catch((err)=> {
//         console.log(err);
//     });

// User.findByIdAndUpdate(("65e95cf74c20dd487a3b4a45"),{age:30},{new:true})
//     .then((res)=> {
//         console.log(res);
//     })
//     .catch((err)=> {
//         console.log(err);
//     });

// User.deleteOne({name:"Nishant"}).then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// })

// User.deleteMany({name:"Harshit"}).then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.log(err);
// });

User.findByIdAndDelete(("65e95a21981df098e83e8d3c")).then((res)=> {
    console.log(res);
})
.catch((err)=> {
    console.log(err);
});

