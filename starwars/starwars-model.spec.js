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

    describe('the add function', async () => {
        
        it('shoud add a new character', async () => {
            const characterData = { name: 'Han Solo' };
            const character = await Characters.add(characterData)
            const characters = await db('characters')

            expect(characters.length).toBe(1);
        })

        it('should resolve to a new hobbit', async () => {
            const characterData = { name: 'Han Solo' };
            const character = await Characters.add(characterData)
            const characters = await db('characters')

            expect(characters).toEqual([{ id: 1, name: 'Han Solo' }]);
        })
    })

    describe('the remove function', async () => {

        it('should remove a character', async () => {
            const characterData = { name: 'Han Solo' };
            const character = await Characters.add(characterData)
            const characters = await db('characters')

            expect(characters.length).toBe(1);

            const remove = await Characters.remove(1);
            const newCharacters = await db('characters')

            expect(newCharacters.length).toBe(0);
        })

        it('should return status code of 200', async () => {
            const characterData = { name: 'Han Solo' };
            const character = await Characters.add(characterData)
            const characters = await db('characters')

            expect(characters.length).toBe(1);

            const res = await request(server).delete('/api/starwars/1').set('Accept', 'application/json').send("1");

            expect(res.status).toBe(200);
        })
    })
})