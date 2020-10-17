'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usuario_route = require('./usuario_route');

var _usuario_route2 = _interopRequireDefault(_usuario_route);

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _url_routes = require('./url_routes');

var _url_routes2 = _interopRequireDefault(_url_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _expressPromiseRouter2.default)();

router.use('/usuario', _usuario_route2.default);
router.use('/url', _url_routes2.default);

exports.default = router;