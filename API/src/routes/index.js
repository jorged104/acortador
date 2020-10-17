import Usuario from './usuario_route';
import routerx from 'express-promise-router';
import url from './url_routes';

const router=routerx();

router.use('/usuario', Usuario);
router.use('/url',url);

export default router;