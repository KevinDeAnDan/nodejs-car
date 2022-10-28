const Model = require('../models/Model')

class SiteController {

    index(req, res, next) {

        Model.find({})
            .then(models => res.send(models)) 
            
            .catch(next);
            
    }
    search(req, res) {
        res.send('<h1>Search</h1>')
    }
}

module.exports = new SiteController