const express = require('express');
const router = express.Router();
const connection = require("./conf");
const verifyToken = require('./middleware');

// //Ici on créée un nouveau contact.

router.post('/', verifyToken, (req, res) => {



    connection.query('INSERT INTO contact (contact_name, adress, phone, mail) VALUES (?, ?, ?, ?)', [req.body.contact_name, req.body.adress, req.body.phone, req.body.mail], (err, results, fields) => {
        if (err) {
            console.log("Error");
        } else {
            console.log("Youpi !")
            req.body.id = results.insertId;
            res.json(req.body);
        }
    })

});


// //Met à jour le contact !

router.put(
    "/:id", verifyToken,
    (req, res) => {
        connection.query(
            "UPDATE contact SET contact_name=?, adress=?, phone=?, mail=? WHERE id=?",
            [req.body.contact_name, req.body.adress,req.body.phone, req.body.mail, req.params.id],
            (error, results, fields) => {
                if (error) {
                    res.json(error);
                } else {
                    connection.query(
                        "SELECT * FROM contact WHERE id=?",
                        [req.params.id],
                        (error, results, fields) => {
                            if (error) {
                                res.json(error)
                            } else {
                                res.json(req.body);
                            }
                        }
                    )
                }
            }
        )
    }
);

// // Ici on récupère les données de la table contact.

router.get(
    "/",
    (req, res) => {
        connection.query('SELECT * FROM contact ', (error, results, fields) => {
            if (error) {
                res.json(error);
            }

            else {
                res.json(results);
            }
        })
    }
)





module.exports = router;