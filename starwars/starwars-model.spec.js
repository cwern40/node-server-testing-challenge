const Characters = require('./characters-model');
const router = require('./characters-route');
const request = require('supertest');
const db = require('../data/dbConfig');

describe('The StarWars Model', () => {

    beforeEach(async () => {
        await db('starwars').truncate();
    })

    describe('the find function', () => {
        it('should return status code of 200', () => {
            return request(router)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        it('should return a list of characters', () => {
            return request(router)
                .get('/')
                .then(res => {
                    expect(res.body.length).toBe(0)
                })
        })
    })
})