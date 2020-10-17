'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _token = require('../services/token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    verify_usuario: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
            var response;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (req.headers.token) {
                                _context.next = 2;
                                break;
                            }

                            return _context.abrupt('return', res.status(404).send({
                                message: 'No token header'
                            }));

                        case 2:
                            _context.next = 4;
                            return _token2.default.verify(req.headers.token);

                        case 4:
                            response = _context.sent;

                            if (!response) {
                                _context.next = 10;
                                break;
                            }

                            req.body.id = response;
                            next();
                            _context.next = 11;
                            break;

                        case 10:
                            return _context.abrupt('return', res.status(404).send({
                                message: 'No token valid'
                            }));

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function verify_usuario(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }(),
    verify_admin: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
            var response;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            if (req.headers.token) {
                                _context2.next = 2;
                                break;
                            }

                            return _context2.abrupt('return', res.status(404).send({
                                message: 'No token'
                            }));

                        case 2:
                            _context2.next = 4;
                            return _token2.default.decode(req.headers.token);

                        case 4:
                            response = _context2.sent;

                            if (!(response.rol == 'admin')) {
                                _context2.next = 9;
                                break;
                            }

                            next();
                            _context2.next = 10;
                            break;

                        case 9:
                            return _context2.abrupt('return', res.status(404).send({
                                message: 'No token'
                            }));

                        case 10:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function verify_admin(_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }()
};