const express = require('express');
const router = express.Router();
const connection = require("./conf");

//récupération du nom des horaires (ventes)
router.get('/schedule', (req, res) => {
    connection.query('SELECT schedule_name FROM schedule WHERE id =1', 
    (err,results) => {
        if (err) {
            console.log('Dommage!');
        }else {
            console.log('Marvellous');
            res.json(results);
        }
        });
});

//récupération de l'heure de début des ventes
router.get('/schedule', (req, res) => {
    connection.query('SELECT start_hour FROM schedule WHERE id =1', 
    (err,results) => {
        if (err) {
            console.log('Dommage!');
        }else {
            console.log('Marvellous');
            res.json(results);
        }
        });
});

//récupération de l'heure de fin des ventes
router.get('/schedule', (req, res) => {
    connection.query('SELECT end_hour FROM schedule WHERE id =1', 
    (err,results) => {
        if (err) {
            console.log('Dommage!');
        }else {
            console.log('Marvellous');
            res.json(results);
        }
        });
});

//récupération de la date des horaires (ventes)
router.get('/schedule', (req, res) => {
    connection.query('SELECT day FROM schedule WHERE id =1', 
    (err,results) => {
        if (err) {
            console.log('Dommage!');
        }else {
            console.log('Marvellous');
            res.json(results);
        }
        });
});


router.get('/schedule', (req, res) => {
    connection.query('SELECT schedule_name FROM schedule WHERE id =2', 
    (err,results) => {
        if (err) {
            console.log('Dommage!');
        }else {
            console.log('Marvellous');
            res.json(results);
        }
        });
});


router.get('/schedule', (req, res) => {
    connection.query('SELECT start_hour FROM schedule WHERE id =2', 
    (err,results) => {
        if (err) {
            console.log('Dommage!');
        }else {
            console.log('Marvellous');
            res.json(results);
        }
        });
});

router.get('/schedule', (req, res) => {
    connection.query('SELECT end_hour FROM schedule WHERE id =2', 
    (err,results) => {
        if (err) {
            console.log('Dommage!');
        }else {
            console.log('Marvellous');
            res.json(results);
        }
        });
});

router.get('/schedule', (req, res) => {
    connection.query('SELECT day FROM schedule WHERE id =2', 
    (err,results) => {
        if (err) {
            console.log('Dommage!');
        }else {
            console.log('Marvellous');
            res.json(results);
        }
        });
});

module.exports = router;