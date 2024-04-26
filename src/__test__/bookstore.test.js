const { getAllBooks } = require("../bookstore")

const fs = require("fs");
jest.mock("fs");

describe("bookstore", () => {
    describe("getAllBooks", () => {
        it("should return titles of all books", () => {
            // arrange
            fs.readdirSync.mockImplementation(() => ["hitchhikers.json"]);
            fs.readFileSync.mockImplementation(() => JSON.stringify({ title: "Hitchhikers Guide to the Galaxy", author: "Douglas Adams"}));

            // act
            const result = getAllBooks();

            // assert
            expect(result[0].title).toBe("Hitchhikers Guide to the Galaxy")
            expect(result[0].author).toBe("Douglas Adams")
        })
    })
})
