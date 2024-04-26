const fs = require('fs')

const getAllBooks = () => {
    // get all json files
    const books = fs.readdirSync("data");

    // read all json files into an array
    return books.map(book => {
        const data = fs.readFileSync(`data/${book}`);
        return JSON.parse(data);
    });
}

module.exports = { getAllBooks }