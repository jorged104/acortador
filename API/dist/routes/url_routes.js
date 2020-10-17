'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _url_controller = require('../controllers/url_controller');

var _url_controller2 = _interopRequireDefault(_url_controller);

var _auth = require('../middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

var _recapcha = require('../middlewares/recapcha');

var _recapcha2 = _interopRequireDefault(_recapcha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _expressPromiseRouter2.default)();

router.post('/add', _auth2.default.verify_usuario, _url_controller2.default.add);
router.get('/query', _recapcha2.default.verifycapcha, _url_controller2.default.query);
router.get('/list', _auth2.default.verify_usuario, _url_controller2.default.list);
router.put('/activate', _url_controller2.default.activate);
router.put('/deactivate', _url_controller2.default.deactivate);

exports.default = router;