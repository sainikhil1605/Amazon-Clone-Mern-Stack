const router = require('express').Router();
const { getOrders, addOrders, getOrder } = require('../controllers/Order');

router.get('/', getOrders);
router.post('/', addOrders);
router.get('/:id', getOrder);
module.exports = router;
