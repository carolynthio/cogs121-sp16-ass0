var models = require('../models');

exports.send = function(req, res) {
   console.log(req.body); // help you see what is inside of req.body
   var message = new models.Message({
        "email": req.body.email, 
        "content": req.body.content,
        "created": new Date()
   });

   message.save(afterSave);
   function afterSave(err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/');
        }
   }
};

