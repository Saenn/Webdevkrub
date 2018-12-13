module.exports = function(app){
    const indexController = require('../controller/indexController')

    app.route('/createmember')
        .post(indexController.createMember);
    
    app.route('/findmember')
        .get(indexController.getUser);
    
    app.route('/announcecard')
        .post(indexController.announceCard);
    
    app.route('/getallcard')
        .post(indexController.getAllCard);
}