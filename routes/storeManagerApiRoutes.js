module.exports = function(app) {
    const storeManager = require('../controllers/userController');

    app.route('/')
    .get(storeManager.testServer);



}