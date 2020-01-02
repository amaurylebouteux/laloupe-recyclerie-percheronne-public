const request = require("request");

describe(
    "test counters entity", 
    () => {

        const counters = {
            count_name: "Tonnage ventes", 
            count_values: "2000"
        };

        beforeAll(
            (done) => {
                
                const server = require("../server.js");
                done();
            }
        )

        it(
            "test_counters_post",
            (done) => {
                request.post(
                    "http://localhost:3000/api/counters/",
                    {
                        json: true,
                        body: counters
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.count_name).toBe(counters.count_name);
                        expect(body.count_values).toBe(counters.count_values);
                        counters.id = body.id;
                        done();
                    }
                )
            }
        );


        // on teste la MAJ des compteurs.
        it( 
            "counters_put", 
            (done) => {

                counters.count_name = "Gros Tonnage Ventes";
                counters.count_values = 25000;

                request.put(
                    "http://localhost:3000/api/counters/"+counters.id, 
                    {
                        json: true, 
                        body: counters
                    }, 
                    (error, response, body) => {
                        expect( body.id ).toBeGreaterThan(0);
                        expect(body.count_name).toBe(counters.count_name);
                        expect(body.count_values).toBe(counters.count_values);
                        done();
                    }
                )  
            }
        ); 

        // on teste l'affichage du compteur
        it(
            "should get the counter",
            (done) => {

                request.get(
                    "http://localhost:3000/api/counters/" + counters.id,
                    {
                        json: true
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.count_name).toBe(counters.count_name);
                        expect(body.count_values).toBe(counters.count_values);
                        done();
                    }
                )
            }
        );


    }
)