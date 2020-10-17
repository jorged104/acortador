'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _usuario_controller = require('../controllers/usuario_controller');

var _usuario_controller2 = _interopRequireDefault(_usuario_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _expressPromiseRouter2.default)();

//router.post('/add',usuarioController.add);
//router.get('/query',usuarioController.query);
//router.get('/list',usuarioController.list);
//router.put('/activate',usuarioController.activate);
//router.put('/deactivate',usuarioController.deactivate);
router.post('/login', _usuario_controller2.default.login);
exports.default = router;