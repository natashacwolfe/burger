const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

// Create the router for the app, and export the router at the end of your file.
router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var burgerObj = {
            burger: data
        };
        console.log(burgerObj);
        res.render('index', burgerObj);
    });
});

router.post('/api/burgers', function (req, res) {

    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.burger_name, false],
        function (result) {
            res.json({ id: result.id })
        });
});

router.put('/api/burgers/:id', function (req, res) {
    console.log(req.params.id, req.params.devoured)
    let condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;