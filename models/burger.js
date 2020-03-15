const orm = require('../config/orm');


// Also inside burger.js, 
// create the code that will call the ORM functions using 
// burger specific input for the ORM.
var burger = {

    // get all
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res)
        });
    },

    // add burger
    insertOne: function (cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function (res) {
            cb(res);
        });
    },

    // update devoure or devoured
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne
            ('burgers', objColVals, condition, function (res) {
                cb(res);
            });
    }

};

module.exports = burger;
