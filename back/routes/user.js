const express = require('express');
const router = express.Router();
const connection = require("./conf");
const verifyToken = require('./middleware');
const bcrypt = require('bcryptjs');
const salt = '$2a$10$uZjL/5bsCnn4Ge7aIJEo1O';
const jwt = require('jsonwebtoken');
const jwtsecret = 'gdgfhegfhegegjeg';

router.post(
    "/register", 
    (req,res) => {
        const user = req.body;
      connection.query(
        "INSERT INTO user (username, user_password) VALUES (?, ?)", 
        [user.username, bcrypt.hashSync(user.user_password, salt)], 
        (error, results, fields) => {
          if( error ){
            res.send(error);
          }
          else{
            res.send("OK");
          }
        }
      )
    }
  )
  
  router.post('/login', (req, res) => {
  
    // on récupère les données de connexion de notre utilisateur 
    const user = req.body;
    const crypted = bcrypt.hashSync(user.user_password, salt );
  
    // on va essayer de trouver dans la base de données un utilisateur 
    // dont les noms et mots de passe correspondent
  
    connection.query(
      "SELECT * FROM user WHERE username=? AND user_password=?",
      [user.username, crypted ],
      (error, results, fields) => {
        if (error || results.length === 0) {
          res.status(401).send("Unable to login");
        }
        else {
          // token creation
          jwt.sign(
            // results[0],
            {user},
            jwtsecret,
            {expiresIn: "1h"},
            (err, token) => {
              if( err ){
                res.status(501).send("JWT error");
              }
              else{
                res.status(200).json({token});
              }
            })
        }
      }
    )
  
  })
  

//Ajouter un compte admin.

router.post('/', verifyToken, (req, res) => {


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
    "/:id", verifyToken,
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
    "/", verifyToken,
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
    "/:id", verifyToken,
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