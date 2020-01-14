const request = require("request");

describe(
    "test events entity",
    () => {

        const events = {
            event_name: "abcd",
            event_desc: "efgh",
            event_date: "2020-04-02",
            start_hour: "01:00:00", 
            end_hour: "02:00:00",
            price: 40.4,
            remain_place: 5,

        };

        beforeAll(
            (done) => {

                const server = require("../server.js");
                done();
            }
        )

        // on teste la création des événements
        it(
            "create a new event",
            (done) => {
                request.post(
                    "http://localhost:3000/api/events/",
                    {
                        json: true,
                        body: events
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.event_name).toBe(events.event_name);
                        expect(body.event_desc).toBe(events.event_desc);
                        expect(body.event_date).toBe(events.event_date);
                        expect(body.start_hour).toBe(events.start_hour);
                        expect(body.end_hour).toBe(events.end_hour);
                        expect(body.price).toBe(events.price);
                        expect(body.remain_place).toBe(events.remain_place);
                        events.id = body.id;
                        done();
                    }
                )
            }
        );

        // on teste la MAJ du contenu et des titres de la page Fonctionnement
        it( 
            "events_put", 
            (done) => {

            events.event_name = "abcd";
            events.event_desc = "efgh";
            events.event_date = "2021-12-19";
            events.start_hour = "09:00:00"; 
            events.end_hour  = "10:00:00";
            events.price = 25678.4;
            events.remain_place= 1;

                request.put(
                    "http://localhost:3000/api/events/"+ events.id, 
                    {
                        json: true, 
                        body: events
                    }, 
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.event_name).toBe(events.event_name);
                        expect(body.event_desc).toBe(events.event_desc);
                        expect(body.event_date).toBe(events.event_date);
                        expect(body.start_hour).toBe(events.start_hour);
                        expect(body.end_hour).toBe(events.end_hour);
                        expect(body.price).toBe(events.price);
                        expect(body.remain_place).toBe(events.remain_place);
                        done();
                    }
                )  
            }
        );  


        


        // // on teste la lecture de events
        it(
            "should get the all content",
            (done) => {

                request.get(
                    "http://localhost:3000/api/events/" + events.id,
                    {
                        json: true
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.event_name).toBe(events.event_name);
                        expect(body.event_desc).toBe(events.event_desc);
                        expect(body.event_date).toBe(events.event_date);
                        expect(body.start_hour).toBe(events.start_hour);
                        expect(body.end_hour).toBe(events.end_hour);
                        expect(body.price).toBe(events.price);
                        expect(body.remain_place).toBe(events.remain_place);
                        done();
                    }
                )
            }
        );


         // // on teste la lecture de TOUS les events
         it(
            "should get the all content",
            (done) => {

                request.get(
                    "http://localhost:3000/api/events/",
                    {
                        json: true
                    },
                    (error, response, body) => {
                        expect(body[body.length - 1].id).toBeGreaterThan(0);
                        expect(body[body.length - 1].event_name).toBe(events.event_name);
                        expect(body[body.length - 1].event_desc).toBe(events.event_desc);
                        expect(body[body.length - 1].event_date).toBe(events.event_date);
                        expect(body[body.length - 1].start_hour).toBe(events.start_hour);
                        expect(body[body.length - 1].end_hour).toBe(events.end_hour);
                        expect(body[body.length - 1].price).toBe(events.price);
                        expect(body[body.length - 1].remain_place).toBe(events.remain_place);
                       done();
                    }
                )
            }
        );



        // // on teste la suppression de events
        it(
            "should delete the events",
            (done) => {

                request.delete(
                    "http://localhost:3000/api/events/" + events.id,
                    {
                        json: true
                    },
                    (error, response, body) => {
                        expect(body.id).toBeGreaterThan(0);
                        expect(body.event_name).toBe(events.event_name);
                        expect(body.event_desc).toBe(events.event_desc);
                        expect(body.event_date).toBe(events.event_date);
                        expect(body.start_hour).toBe(events.start_hour);
                        expect(body.end_hour).toBe(events.end_hour);
                        expect(body.price).toBe(events.price);
                        expect(body.remain_place).toBe(events.remain_place);
                        done();
                    }
                )
            }
        );


    }
)