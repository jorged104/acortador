'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _token = require('../services/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    add: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
            var reg;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _bcryptjs2.default.hash(req.body.password, 10);

                        case 3:
                            req.body.password = _context.sent;

                            req.body.saldo = 0;
                            _context.next = 7;
                            return _models2.default.Usuario.create(req.body);

                        case 7:
                            reg = _context.sent;

                            res.status(200).json(reg);
                            _context.next = 14;
                            break;

                        case 11:
                            _context.prev = 11;
                            _context.t0 = _context['catch'](0);

                            res.status(500).send({
                                message: 'Ocurrio un error'
                            });

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 11]]);
        }));

        return function add(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }(),
    query: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
            var reg;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _models2.default.Usuario.findOne({ _id: req.query._id });

                        case 3:
                            reg = _context2.sent;

                            if (!req) {
                                res.status(404).send({
                                    message: "El registro no existe"
                                });
                            } else {
                                res.status(200).json(reg);
                            }
                            _context2.next = 10;
                            break;

                        case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2['catch'](0);

                            res.status(500).send({
                                message: 'Ocurrio un error'
                            });

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[0, 7]]);
        }));

        return function query(_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }(),
    list: function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
            var valor, reg;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            valor = req.query.valor;
                            _context3.next = 4;
                            return _models2.default.Usuario.find({
                                $or: [{ 'nombre': new RegExp(valor, 'i') }, { 'email': new RegExp(valor, 'i') }]
                            }, { createAt: 0 }).sort({ 'createAt': -1 });

                        case 4:
                            reg = _context3.sent;

                            res.status(200).json(reg);
                            _context3.next = 11;
                            break;

                        case 8:
                            _context3.prev = 8;
                            _context3.t0 = _context3['catch'](0);

                            res.status(500).send({
                                message: 'Ocurrio un error'
                            });

                        case 11:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[0, 8]]);
        }));

        return function list(_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }(),
    activate: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res, next) {
            var reg;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _models2.default.Usuario.findByIdAndUpdate({ _id: req.body._id }, { estado: 1 });

                        case 3:
                            reg = _context4.sent;

                            res.status(200).json(reg);
                            _context4.next = 10;
                            break;

                        case 7:
                            _context4.prev = 7;
                            _context4.t0 = _context4['catch'](0);

                            res.status(500).send({
                                message: 'Ocurrio un error'
                            });

                        case 10:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined, [[0, 7]]);
        }));

        return function activate(_x10, _x11, _x12) {
            return _ref4.apply(this, arguments);
        };
    }(),
    deactivate: function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res, next) {
            var reg;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.prev = 0;
                            _context5.next = 3;
                            return _models2.default.Usuario.findByIdAndUpdate({ _id: req.body._id }, { estado: 0 });

                        case 3:
                            reg = _context5.sent;

                            res.status(200).json(reg);
                            _context5.next = 10;
                            break;

                        case 7:
                            _context5.prev = 7;
                            _context5.t0 = _context5['catch'](0);

                            res.status(500).send({
                                message: 'Ocurrio un error'
                            });

                        case 10:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined, [[0, 7]]);
        }));

        return function deactivate(_x13, _x14, _x15) {
            return _ref5.apply(this, arguments);
        };
    }(),
    login: function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res, next) {
            var user, match, tokenReturn;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.prev = 0;
                            _context6.next = 3;
                            return _models2.default.Usuario.findOne({ email: req.body.email });

                        case 3:
                            user = _context6.sent;

                            if (!user) {
                                _context6.next = 18;
                                break;
                            }

                            _context6.next = 7;
                            return _bcryptjs2.default.compare(req.body.password, user.password);

                        case 7:
                            match = _context6.sent;

                            if (!match) {
                                _context6.next = 15;
                                break;
                            }

                            _context6.next = 11;
                            return _token2.default.encode(user._id, user.rol, user.email);

                        case 11:
                            tokenReturn = _context6.sent;

                            res.status(200).json({ tokenReturn: tokenReturn });
                            _context6.next = 16;
                            break;

                        case 15:
                            res.status(400).send({
                                message: 'Error password o email incorrectos'
                            });

                        case 16:
                            _context6.next = 19;
                            break;

                        case 18:
                            res.status(400).send({
                                message: 'Error password o email incorrectos'
                            });

                        case 19:
                            _context6.next = 24;
                            break;

                        case 21:
                            _context6.prev = 21;
                            _context6.t0 = _context6['catch'](0);

                            res.status(500).send({
                                message: 'Ocurrio un error'
                            });

                        case 24:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined, [[0, 21]]);
        }));

        return function login(_x16, _x17, _x18) {
            return _ref6.apply(this, arguments);
        };
    }()
};