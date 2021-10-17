const productModel = require('../models/ProductModel');

exports.getProducts = (req, res) => {
  productModel.find({}, (err, doc) => {
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.send(doc);
    }
  });
};
exports.postProducts = (req, res) => {
  const productArray = req.body;
  const postData = (productArray) => {
    productArray.map(async (item) => {
      const productData = new productModel(item);
      await productData.save((err) => {
        if (err) {
          throw err;
        }
      });
    });
  };
  try {
    postData(productArray);
    res.send({ status: 'Products Inserted Sucessfully' });
  } catch {
    res.setStatus(400);
  }
};
