const router = require('express').Router();
const {
  getOrders,
  addOrders,
  getOrder,
  updateOrder,
} = require('../controllers/Order');

router.get('/', getOrders);
router.post('/', addOrders);

router.get('/:id', getOrder);
router.patch('/:id', updateOrder);
module.exports = router;
