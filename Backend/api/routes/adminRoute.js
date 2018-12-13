module.exports = function(app) {
    const adminController = require('../controller/adminController')

    app.route('/admin')
        .post(adminController.createAdmin);

    app.route('/login')
        .post(adminController.login);
}