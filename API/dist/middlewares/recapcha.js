'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret_key = '6LfOIMkZAAAAAJWeSEB8VtaFegRHW-kbRiwMFt8r';

exports.default = {
    verifycapcha: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
            var url;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            url = 'https://www.google.com/recaptcha/api/siteverify?secret=' + secret_key + '&response=' + req.query.tokencap;

                            _axios2.default.post(url, {}, {
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
                                }
                            }).then(function (res) {
                                console.log(res.data);
                                console.log(res.data.success);
                                if (res.data.success) {
                                    if (res.data.score >= 0.5) {
                                        next();
                                    } else {
                                        res.status(404).send({
                                            message: 'You are a robot'
                                        });
                                    }
                                } else {
                                    res.status(404).send({
                                        message: 'You are a robot'
                                    });
                                }
                            }).catch(function (error) {
                                res.status(404).send({
                                    message: 'No token valid'
                                });
                            });

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function verifycapcha(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }()
};