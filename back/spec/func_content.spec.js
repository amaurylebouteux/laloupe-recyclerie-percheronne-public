const request = require("request");

describe(
    "test func_content entity",
    () => {

        const func_content = {
            title: "abcd",
            content: "efgh"
        };

        beforeAll(
            (done) => {

                const server = require("../server.js");
                done();
            }
        )

        // on teste la création des articles
        it(
            "create a new article ?",
            (done) => {
                request.post(
                    "http://localhost:3000/api/func_content/",
                    {
                        json: true,
                        body: func_content
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.title).toBe(func_content.title);
                        expect(body.content).toBe(func_content.content);

                        func_content.id = body.id;
                        done();
                    }
                )
            }
        );

        // on teste la MAJ du contenu et des titres de la page Fonctionnement
        it( 
            "func_content_put", 
            (done) => {

                func_content.title = "Je veux ça";
                func_content.content = "Ma liste à moi";

                request.put(
                    "http://localhost:3000/api/func_content/"+func_content.id, 
                    {
                        json: true, 
                        body: func_content
                    }, 
                    (error, response, body) => {
                        expect( body.id ).toBeGreaterThan(0);
                        expect(body.title).toBe(func_content.title);
                        expect(body.content).toBe(func_content.content);
                        done();
                    }
                )  
            }
        );  


        //on teste la MAJ des titres de la page Fonctionnement.
        it( 
            "func_content_put_title", 
            (done) => {

                func_content.title = "Je veux ça";

                request.put(
                    "http://localhost:3000/api/func_content/title/"+func_content.id, 
                    {
                        json: true, 
                        body: func_content
                    }, 
                    (error, response, body) => {
                        expect( body.id ).toBeGreaterThan(0);
                        expect(body.title).toBe(func_content.title);
                        done();
                    }
                )  
            }
        ); 

         //on teste la MAJ du contenu descirptif de la page Fonctionnement.
        it( 
            "func_content_put_content", 
            (done) => {

                func_content.content = "Ma liste à moi";

                request.put(
                    "http://localhost:3000/api/func_content/content/"+func_content.id, 
                    {
                        json: true, 
                        body: func_content
                    }, 
                    (error, response, body) => {
                        expect( body.id ).toBeGreaterThan(0);
                        expect(body.content).toBe(func_content.content);
                        done();
                    }
                )  
            }
        ); 


        // on teste la lecture de contact
        it(
            "should get the all content",
            (done) => {

                request.get(
                    "http://localhost:3000/api/func_content/" + func_content.id,
                    {
                        json: true
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.title).toBe(func_content.title);
                        expect(body.content).toBe(func_content.content);
                        done();
                    }
                )
            }
        );

        // on test l'affichage des titres
        it(
            "should get the title",
            (done) => {

                request.get(
                    "http://localhost:3000/api/func_content/title/" + func_content.id,
                    {
                        json: true
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.title).toBe(func_content.title);
                        done();
                    }
                )
            }
        );

        // on test l'affichage du contenu en dessous des titres.
        it(
            "should get the content",
            (done) => {

                request.get(
                    "http://localhost:3000/api/func_content/content/" + func_content.id,
                    {
                        json: true
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.content).toBe(func_content.content);
                        done();
                    }
                )
            }
        );


        // on teste la suppression de func_content
        it(
            "should delete the contact",
            (done) => {

                request.delete(
                    "http://localhost:3000/api/func_content/" + func_content.id,
                    {
                        json: true
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.title).toBe(func_content.title);
                        expect(body.content).toBe(func_content.content);
                        done();
                    }
                )
            }
        );


    }
)