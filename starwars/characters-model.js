const db = require('../data/dbConfig')

module.exports = {
    find,
    add,
    remove
}

function find() {
    return db('characters');
}

function add(character) {
    return db('characters').insert(character);
}

function remove(id) {
    return db('characters').where({ id }).del();
}