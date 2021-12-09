const router = require('express').Router();
const {
  getAllProducts,
  getProduct,
  addProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/Product');

router.get('/', getAllProducts);
router.post('/', addProducts);
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
module.exports = router;
