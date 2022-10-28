const Item = require('../models/Model');
const { mongooseToObject } = require('../util/mongoose');

class ItemController {
    
    show(req, res, next) {
        
        Item.findOne({ slug: req.params.slug })
            .then(item => {
                res.send(item);
            }
            )
            .catch(next);   
    }

    GET
    create(req, res, next) {
        res.send('ITEM CREATED');
    }


    // POST
    store(req, res, next) {
        res.json(res.body)
        console.log(res.body);
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /courses/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /courses/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new ItemController