const express = require('express');
const router = express.Router();
const connection = require("./conf");

//Ajouter un compte admin.

router.post('/', (req, res) => {


    connection.query('INSERT INTO user (username, user_password) VALUES (?, ?)', 

    [req.body.username, req.body.user_password], (err, results, fields) => {
        if (err) {
            console.log("Error");
        } else {
            console.log("Youpi !")
            req.body.id = results.insertId;
            res.json(req.body);
        }
    })

});


//Modifier un compte Admin.

router.put(
    "/:id",
    (req, res) => {
        connection.query(
            "UPDATE user SET username = ?, user_password = ? WHERE id = ?",
            [req.body.username, req.body.user_password, req.params.id],
            (error, results, fields) => {
                if (error) {
                    res.json(error);
                } else {
                    connection.query(
                        "SELECT * FROM user WHERE id=?",
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


// Lecture de la table user.

router.get(
    "/",
    (req, res) => {
        connection.query('SELECT * FROM user ', (error, results, fields) => {
            if (error) {
                res.json(error);
            }

            else {
                res.json(results);
            }
        })
    }
);

//supression d'un compte administrateur.

router.delete(
    "/:id", 
    (req, res) => {
        connection.query(
            "SELECT * FROM user WHERE id=?", 
            [req.params.id],
            (error, results, fields) => {

                if( error ){
                    res.json(error);
                }
                else if(results.length === 0 ){
                    res.status(404).json("invalid id");
                }
                else{
                    const output = results[0];
                    connection.query(
                        "DELETE FROM user WHERE id=?", 
                        [req.params.id], 
                        (error, results, fields) => {
                            if( error ){
                                res.json(error);
                            }
                            else{
                                res.json(output);
                            }
                        }
                    )
                }

            }
        )
    }
);








module.exports = router;