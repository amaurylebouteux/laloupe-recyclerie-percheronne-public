const express = require('express');
const router = express.Router();
const connection = require("./conf");

//Creation des compteurs(Nom et poids).

router.post('/', (req, res) => {



    connection.query('INSERT INTO counters (count_name, count_values) VALUES (?, ?)', [req.body.count_name, req.body.count_values], (err, results, fields) => {
        if (err) {
            console.log("Error");
        } else {
            console.log("Youpi !")
            req.body.id = results.insertId;
            res.json(req.body);
        }
    })

});

//Modification des compteurs (Nom et poids).

router.put(
    "/:id",
    (req, res) => {
        connection.query(
            "UPDATE counters SET count_name=?, count_values=? WHERE id=?",
            [req.body.count_name, req.body.count_values, req.params.id],
            (error, results, fields) => {
                if (error) {
                    res.json(error);
                } else {
                    connection.query(
                        "SELECT * FROM counters WHERE id=?",
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

//Récupération des compteurs

router.get(
    "/:id",
    (req, res) => {
        connection.query('SELECT * FROM counters where id = ?', [req.params.id], (error, results, fields) => {
            if (error) {
                res.json(error);
            }
            else if (results.length === 0) {
                res.status(404).json("invalid id");
            }
            else {
                res.json(results[0]);
            }
        })
    }
)




module.exports = router;