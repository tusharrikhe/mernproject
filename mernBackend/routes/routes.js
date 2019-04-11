const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.get("/", (req, res) => {
  Product.find({}, (error, response) => {
    if (error) {
      console.log(error);
    } else {
      res.json(response);
    }
  });
});

router.post("/add", (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price
  });

  newProduct.save((error, response) => {
    if (error) console.log(error);
    else res.json(response);
  });
});
router.get("/product/:id", (req, res) => {
  Product.findById({ _id: req.params.id }, (err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
});
router.delete("/product/:id", (req, res) => {
  Product.remove({ _id: req.params.id }, (err, product) => {
    if (err) {
      res.json(err);
    } else {
      res.json(product);
    }
  });
});
router.put("/product/:id", (req, res) => {
  const update = {
    name: req.body.name,
    price: req.body.price
  };
  Product.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: update },
    (err, product) => {
      if (err) {
        res.json(err);
      } else {
        res.json(product);
      }
    }
  );
});
module.exports = router;
