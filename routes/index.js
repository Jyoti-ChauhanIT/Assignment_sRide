const express = require('express');
const routes = express.Router();
const homeController = require('../controller/homecontroller');


routes.get('/',homeController.home);
routes.post('/insert_record',homeController.insert_record);

module.exports = routes;