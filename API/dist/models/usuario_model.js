'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usuario_schema = new _mongoose.Schema({
    rol: { type: String, maxlength: 30, required: true, default: 'user' },
    nombre: { type: String, maxlength: 30, required: true },
    apellido: { type: String, maxlength: 30, required: true },
    email: { type: String, maxlength: 50, unique: true, required: true },
    password: { type: String, maxlength: 200, required: true },
    estado: { type: Number, default: 0 }, // no - verificado -- verificado -- no activo 
    saldo: { type: Number, default: 0, required: true },
    createAt: { type: Date, default: Date.now }
});

var usuario = _mongoose2.default.model('usuario', usuario_schema);
exports.default = usuario;