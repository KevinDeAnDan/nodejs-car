const modelsRouter = require('./models')
const siteRouter = require('./site')
const itemsRouter = require('./item')

function route(app) {

    app.use('/models', modelsRouter)
    app.use('/items', itemsRouter)
    
    app.use('/', siteRouter)
    
}

module.exports = route