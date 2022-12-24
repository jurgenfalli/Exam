const Model = require('../Model/exam.model');

module.exports = {
    create: (req, res) => {
        Model.create(req.body)
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err));
    },
    getOne: (req, res) => {
        Model.findOne({_id: req.params.id})
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err));
    },
    getAll: (req, res) => {
        Model.find().sort({type: "asc"})
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err));
    },
    update: (req, res) => {
        Model.updateOne({_id: req.params.id}, req.body, {runValidators: true, context: 'query'})
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err));
    },
    delete: (req, res) => {
        Model.deleteOne({_id: req.params.id})
            .then(response => res.json(response))
            .catch(err => res.status(400).json(err));
    }
}