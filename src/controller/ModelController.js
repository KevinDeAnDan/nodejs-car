

class ModelController {
    
    index(req, res) {
        res.send('<h1>Models</h1>')
    }
    show(req, res) {
        res.send('<h1>New</h1>')
    }
}

module.exports = new ModelController