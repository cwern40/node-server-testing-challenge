const Characters = require('./characters-model');
const server = require('../api/server')
const request = require('supertest');
const db = require('../data/dbConfig');

describe('The StarWars Model', () => {

    beforeEach(async () => {
        await db('characters').truncate();
    })

    describe('Get /', () => {

        it('should return status code of 200', async () => {
            const res = await request(server).get('/api/starwars');

            expect(res.status).toBe(200);
        });

        it('should return a list of characters', async () => {
            const characters = await Characters.find()
            
            expect(characters.length).toBe(0)
        })
    })
})