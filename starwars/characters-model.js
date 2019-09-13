const db = require('../data/dbConfig')

module.exports = {
    find,
    add,
    remove
}

function find() {
    return db('characters');
}

function add() {

}

function remove() {

}