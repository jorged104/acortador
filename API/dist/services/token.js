'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyconfig = process.env.KEYCONFIG || "devpassword";

exports.default = {
    encode: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_id, rol, email) {
            var token;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            token = _jsonwebtoken2.default.sign({ _id: _id, rol: rol, email: email }, keyconfig, { expiresIn: '1d' });
                            return _context.abrupt('return', token);

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function encode(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }(),
    verify: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(token) {
            var _ref3, _id;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _jsonwebtoken2.default.verify(token, keyconfig);

                        case 3:
                            _ref3 = _context2.sent;
                            _id = _ref3._id;
                            return _context2.abrupt('return', _id);

                        case 8:
                            _context2.prev = 8;
                            _context2.t0 = _context2['catch'](0);
                            return _context2.abrupt('return', false);

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[0, 8]]);
        }));

        return function verify(_x4) {
            return _ref2.apply(this, arguments);
        };
    }(),
    decode: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(token) {
            var _id, user;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return undefined.verify(token);

                        case 3:
                            _id = _context3.sent;

                            console.log(_id);
                            _context3.next = 7;
                            return _models2.default.Usuario.findOne({ _id: _id });

                        case 7:
                            user = _context3.sent;

                            if (!user) {
                                _context3.next = 10;
                                break;
                            }

                            return _context3.abrupt('return', user);

                        case 10:
                            return _context3.abrupt('return', false);

                        case 13:
                            _context3.prev = 13;
                            _context3.t0 = _context3['catch'](0);
                            return _context3.abrupt('return', false);

                        case 16:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[0, 13]]);
        }));

        return function decode(_x5) {
            return _ref4.apply(this, arguments);
        };
    }()

};