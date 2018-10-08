module.exports = (app) => {

    app.get('/', (req, res) => {
        res.json({answer: 'hello world'});
    });

    app.post('/', (req, res) => {
        res.json({answer: 'this is post request'});
    });

};