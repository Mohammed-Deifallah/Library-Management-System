const db = require("../db_settings/db_conn")

const list_books = (_, res) => {
    db.query("SELECT * FROM library.books", function (err, result) {
        if (err) throw err;
        res.json(result)
    });
}

module.exports = {
    list_books
};