'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//conect db 
_mongoose2.default.Promise = global.Promise;
var dburl = 'mongodb://mongodb:27017/acortador';
_mongoose2.default.connect(dburl, { user: process.env.USER, pass: process.env.PASS }).then(function (mongoose) {
    return console.log('Conectando a la db 27017');
}).catch(function (err) {
    return console.log(err);
});

var app = (0, _express2.default)();
app.use((0, _helmet2.default)());
app.use((0, _morgan2.default)('dev'));
app.use((0, _cors2.default)());

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
app.use('/api', _routes2.default);
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('server on' + app.get('port'));
});