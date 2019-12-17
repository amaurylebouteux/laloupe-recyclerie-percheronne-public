const express = require('express');
const router = express.Router();
const connection = require("./conf");



// //Ajouter un événement.

router.post('/', (req, res) => {


    connection.query('INSERT INTO events (event_name, event_desc, event_date, start_hour, end_hour, price, remain_place) VALUES (?, ?, ?, ?, ?, ?, ?)', 

    [req.body.event_name, req.body.event_desc, req.body.event_date, req.body.start_hour, req.body.end_hour, req.body.price, req.body.remain_place],
     (err, results, fields) => {
        if (err) {
            console.log("Error");
        } else {
            console.log("Youpi !");
            req.body.id = results.insertId;
            res.json(req.body);
        }
    })

});

// //Modifier un événement.

router.put(
    "/:id",
    (req, res) => {
        connection.query(
            "UPDATE events SET event_name = ?, event_desc = ?, event_date =?, start_hour= ?, end_hour = ?,price = ?, remain_place = ?  WHERE id = ?",
            [req.body.event_name, req.body.event_desc, req.body.event_date, req.body.start_hour, req.body.end_hour, req.body.price, req.body.remain_place, req.params.id],
            (error, results, fields) => {
                if (error) {
                    res.json(error);
                } else {
                    connection.query(
                        "SELECT * FROM events WHERE id=?",
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


// // lecture d'un événement d'events.

router.get(
    "/:id",
    (req, res) => {
        connection.query('SELECT * FROM events where id = ?', [req.params.id], (error, results, fields) => {
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


// // Lecture de tous les events !

router.get(
    "/",
    (req, res) => {
        connection.query('SELECT * FROM events', (error, results, fields) => {
            if (error) {
                res.json(error);
            }
            else if (results.length === 0) {
                res.status(404).json("invalid id");
            }
            else {
                res.json(results);
            }
        })
    }
)

// //supression d'un event.

router.delete(
    "/:id", 
    (req, res) => {
        connection.query(
            "SELECT * FROM events WHERE id=?", 
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
                        "DELETE FROM events WHERE id=?", 
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