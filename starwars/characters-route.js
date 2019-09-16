const router = require('express').Router()

const Characters = require('./characters-model');

router.get('/', (req, res) => {
    Characters.find()
        .then(characters => {
            res.json(characters)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.post('/', (req, res) => {
    const characterData = req.body;

    Characters.add(characterData)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    Characters.remove(id)
        .then(removed => {
            res.json({
                message: "character successfully removed"
            })
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;