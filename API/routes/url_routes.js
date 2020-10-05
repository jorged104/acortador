import routerx from 'express-promise-router';
import urlController from '../controllers/url_controller';
import auth from '../middlewares/auth';
import capcha from '../middlewares/recapcha';
const router = routerx();

router.post('/add',auth.verify_usuario,urlController.add);
router.get('/query',capcha.verifycapcha,urlController.query);
router.get('/list',auth.verify_usuario,urlController.list);
router.put('/activate',urlController.activate);
router.put('/deactivate',urlController.deactivate);

export default router;