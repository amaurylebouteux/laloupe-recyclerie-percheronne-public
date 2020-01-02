const express = require('express');
const router = express.Router();
const connection = require("./conf");



//récupération de l'intégralité de la Table func_content
router.get('/', (req, res) => {
    connection.query('SELECT * FROM func_content',
        (err, results) => {
            if (err) {
                console.log('Dommage!');
            } else {
                console.log('Marvellous');
                res.json(results);
            }
        });
});

//route d'exemple pour récupérer les titres de la page fonctionnemment

router.get('/title/:id', (req, res) => {

    connection.query('SELECT id,title FROM func_content WHERE id = ?', [req.params.id],

        (error, results, fields) => {

            if (error) {
                res.json(error);
            }
            else if (results.length === 0) {
                res.status(404).json("invalid id");
            }
            else {
                res.json(results[0]);
            }
        });
});

// //récupération des données du texte situé dans les encarts en dessous des titres.

router.get(
    "/:id",
    (req, res) => {
        connection.query(
            "SELECT * FROM func_content WHERE id=?",
            [req.params.id],
            (error, results, fields) => {
                if (error) {
                    res.json(error);
                }
                else if (results.length === 0) {
                    res.status(404).json("invalid id");
                }
                else {
                    res.json(results[0]);
                }
            }
        )
    }
);


//récupération des titres.

router.get(
    "/content/:id",
    (req, res) => {
        connection.query(
            "SELECT id, content FROM func_content WHERE id=?",
            [req.params.id],
            (error, results, fields) => {
                if (error) {
                    res.json(error);
                }
                else if (results.length === 0) {
                    res.status(404).json("invalid id");
                }
                else {
                    res.json(results[0]);
                }
            }
        )
    }
);

// //Ajout d'un enregistrement dans la table func_content

router.post('/', (req, res) => {

    connection.query('INSERT INTO func_content (title, content) VALUES (?, ?)', [req.body.title, req.body.content], (err, results, fields) => {
        if (err) {
            console.log("Error");
        } else {
            console.log("Youpi !")
            req.body.id = results.insertId;
            res.json(req.body);
        }
    })

});

// //Suppression d'un enregistrement de la table func_content

router.delete('/:id', (req, res) => {


    connection.query('SELECT * FROM func_content WHERE id = ?', [req.params.id],
        (error, results, fields) => {

            if (error) {
                res.json(error);

            } else if (results.length === 0) {
                res.status(404).json("invalid id");

            } else {
                const output = results[0];
                connection.query(
                    "DELETE FROM func_content WHERE id=?",
                    [req.params.id],
                    (error, results, fields) => {

                        if (error) {
                            res.json(error);
                        } else {
                            res.json(output);
                        }
                    }
                )
            }

        }
    )
}
);

// //Modification d'un enregistrement de la table func_content.

router.put(
    "/:id",
    (req, res) => {
        connection.query(
            "UPDATE func_content SET title=?, content=? WHERE id=?",
            [req.body.title, req.body.content, req.params.id],
            (error, results, fields) => {
                if (error) {
                    res.json(error);
                } else {
                    connection.query(
                        "SELECT * FROM func_content WHERE id=?",
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

// //Modification d'un titre de la table func_content.

router.put(
    "/title/:id",
    (req, res) => {
        connection.query(
            "UPDATE func_content SET title=? WHERE id=?",
            [req.body.title, req.params.id],
            (error, results, fields) => {
                if (error) {
                    res.json(error);
                } else {
                    connection.query(
                        "SELECT * FROM func_content WHERE id=?",
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

// //Modification du contenu descriptif de la table func_content.

router.put(
    "/content/:id",
    (req, res) => {
        connection.query(
            "UPDATE func_content SET content=? WHERE id=?",
            [req.body.content, req.params.id],
            (error, results, fields) => {
                if (error) {
                    res.json(error);
                } else {
                    connection.query(
                        "SELECT * FROM func_content WHERE id=?",
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




module.exports = router;