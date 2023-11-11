const db = require("../db_settings/db_conn")

const list_borrowers = (_, res) => {
    db.query("SELECT b.name, b.email, b.phone, b.registration_date FROM library.members as b WHERE b.id in (SELECT DISTINCT member_id from library.borrowings WHERE done=0)", function (err, result) {
        if (err) throw err;
        res.json(result)
    });
}

const register_borrower = (req, res) => {
    console.log(req);
    let name = req.body['name'],
        phone = req.body['phone'],
        email = req.body['email'];
    db.query(`INSERT INTO library.members(name, phone, email, registration_date) VALUES (${name}, ${phone}, ${email}, CURDATE())`, function (err, result) {
        if (err) throw err;
        res.json(result)
    });
}

module.exports = {
    list_borrowers,
    register_borrower
};