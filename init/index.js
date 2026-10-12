const mongoose = require("mongoose");
const iniData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"
main()
.then((res) => {
    console.log("connection Successful!");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
    await Listing.deleteMany({});
    iniData.data = iniData.data.map((obj) => ({...obj, owner: '6ac8d3b9a9249c5a37e39bae'}));
    await Listing.insertMany(iniData.data);
    console.log("Data was initialized!");
}


initDB();