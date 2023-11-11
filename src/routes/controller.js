const express = require("express")
const router = express.Router()
const books = require("./books")
const borrowers = require("./borrowers")

router.get("/list_books", books.list_books)

// router.post("/register_borrower", borrowers.register_borrower)
router.get("/list_borrowers", borrowers.list_borrowers)
router.get('*', (_, res) => {
    res.send('404! This is an invalid URL.');
});
module.exports = router