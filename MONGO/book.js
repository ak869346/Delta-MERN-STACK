const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction","non-fiction"],
    },
    genre: [String]
});

const Book = mongoose.model("Book",bookSchema);

let book1 = new Book({
    title: "Marvel comics v2",
    price: 600,
    genre: ["comics","superheros","fiction"],
});

book1.save().then((res)=> {
    console.log(res);
}).catch((err)=> {
    console.log(err);
});