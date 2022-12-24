const Controllers = require('../Controllers/exam.controllers');

module.exports = app => {
    app.post('/api/new', Controllers.create);
    app.get('/api/displayAll', Controllers.getAll);
    app.get('/api/displayOne/:id', Controllers.getOne);
    app.put('/api/update/:id', Controllers.update);
    app.delete('/api/delete/:id', Controllers.delete);
}