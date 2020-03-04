module.exports = (app) => {
    app.get('/', function (req, res) {
        res.send("hello");
    })
    app.post('/list', function (req, res) {
        res.send(req.body);
    })
}