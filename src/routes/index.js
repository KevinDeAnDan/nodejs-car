const modelsRouter = require('./models')
const siteRouter = require('./site')


function route(app) {

    app.use('/models', modelsRouter)
    
    app.use('/', siteRouter)
    
}

module.exports = route