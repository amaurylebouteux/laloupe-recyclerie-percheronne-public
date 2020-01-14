const request = require("request");

describe(
    "test user entity",
    () => {

        let user = {
            username: "abcd",
            user_password: "Suefghper"
        };

        beforeAll(
            (done) => {

                const server = require("../server.js");
                done();
            }
        )

        // on teste la création d'un compte admin
        it(
            "create a new user ?",
            (done) => {
                request.post(
                    "http://localhost:3000/api/user/",
                    {
                        json: true,
                        body: user
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.username).toBe(user.username);
                        expect(body.user_password).toBe(user.user_password);
                        user.id = body.id;
                        done();
                    }
                )
            }
        );

        // on teste la MAJ des infos des comptes admin.
        it(
            "user_put",
            (done) => {

                user.username = "abcd";
                user.user_password = "NonCeefghstDeTaFaute";

                request.put(
                    "http://localhost:3000/api/user/" + user.id,
                    {
                        json: true,
                        body: user
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.username).toBe(user.username);
                        expect(body.user_password).toBe(user.user_password);
                        done();
                    }
                )
            }
        );


          // lecture des informations compte utilisateur

          it(
            "should get the user",
            (done) => {

                request.get(
                    "http://localhost:3000/api/user/",
                    {
                        json: true,
                    },
                    (error, response, body) => {
                        expect(body[body.length - 1].id).toBeGreaterThan(0);
                        expect(body[body.length - 1].username).toBe(user.username);
                        expect(body[body.length - 1].user_password).toBe(user.user_password);
                        done();
                    }
                )
            }
        )


        // Ici, on teste la supression d'un compte utilisateur.

        it(
            "should delete the user",
            (done) => {

                request.delete(
                    "http://localhost:3000/api/user/" + user.id,
                    {
                        json: true
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.username).toBe(user.username);
                        expect(body.user_password).toBe(user.user_password);
                        done();
                    }

                )
            }
        );
    }
)