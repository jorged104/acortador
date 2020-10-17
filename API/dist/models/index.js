'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _usuario_model = require('./usuario_model');

var _usuario_model2 = _interopRequireDefault(_usuario_model);

var _url_model = require('./url_model');

var _url_model2 = _interopRequireDefault(_url_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    Usuario: _usuario_model2.default,
    Url: _url_model2.default
};