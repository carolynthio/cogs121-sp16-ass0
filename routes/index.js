var models = require('../models');

exports.view = function(req, res) {
    var data = {data: []};

    models.Message.find().exec(showMessages);
    function showMessages(err, messages) {
        data["data"] = messages;
        console.log(data);
        res.render('index', data);
    }

}
