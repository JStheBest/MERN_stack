const express = require('express')
const router = express.Router()

const Post = require('../../models/Post')

router.get('/', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(posts => res.json(posts))
})

router.post('/', (req, res) => {
    Post.create(req.body)
        .then(posts => res.json(posts))
    })

router.put('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
        .then(posts => res.json(posts))
})

router.delete('/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id)
        .then(posts => res.json)
})



module.exports = router