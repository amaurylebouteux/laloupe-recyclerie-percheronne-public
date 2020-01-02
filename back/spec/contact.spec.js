const request = require("request");

describe(
    "test contact entity",
    () => {

        let contact = {
            contact_name: "Jeremy t po pd",
            adress: "squeezie",
            phone: "0621749054",
            mail: "fabien@gastro.com"
        };

        beforeAll(
            (done) => {

                const server = require("../server.js");
                done();
            }
        )

        // on teste la création d'un contact'
        it(
            "create a new contact ?",
            (done) => {
                request.post(
                    "http://localhost:3000/api/contact/",
                    {
                        json: true,
                        body: contact
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.contact_name).toBe(contact.contact_name);
                        expect(body.adress).toBe(contact.adress);
                        expect(body.phone).toBe(contact.phone);
                        expect(body.mail).toBe(contact.mail);
                        contact.id = body.id;
                        done();

                    }
                )
            }
        )



//on modifie la table contact.
it(
    "contact_put",
    (done) => {

        contact.contact_name = "Marcel";
        contact.adress = "69 rue du Barnaudet";
        contact.phone = "6666666666";
        contact.mail = "Barn@udet.com";


        request.put(
            "http://localhost:3000/api/contact/" + contact.id,
            {
                json: true,
                body: contact
            },
            (error, response, body) => {
                expect(body.id).toBeGreaterThan(0);
                expect(body.contact_name).toBe(contact.contact_name);
                expect(body.adress).toBe(contact.adress);
                expect(body.phone).toBe(contact.phone);
                expect(body.mail).toBe(contact.mail);
                done();
            }
        )
    }
);

// test de lecture du contact.

        it(
            "should get the contact",
            (done) => {

                request.get(
                    "http://localhost:3000/api/contact/",
                    {
                        json: true,
                    },
                    (error, response, body) => {
                        expect(body[contact.id - 1].id).toBeGreaterThan(0);
                        expect(body[contact.id - 1].contact_name).toBe(contact.contact_name);
                        expect(body[contact.id - 1].adress).toBe(contact.adress);
                        expect(body[contact.id - 1].phone).toBe(contact.phone);
                        expect(body[contact.id - 1].mail).toBe(contact.mail);
                        done();
                    }
                )
            }
        )

    }
    )