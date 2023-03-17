const express = require("express");
const router = express.Router();
const formidable = require("formidable");
const fs = require("fs");
const products = [
  {
    id: 1,
    name: "Product Name Goes Here",
    cost: "$123.00",
    sale: "$123.00",
    img: "img/product-1.jpg",
  },
  {
    id: 2,
    name: "Product Name Goes Here",
    cost: "$123.00",
    sale: "$123.00",
    img: "img/product-2.jpg",
  },
  {
    id: 3,
    name: "Product Name Goes Here",
    cost: "$123.00",
    sale: "$123.00",
    img: "img/product-3.jpg",
  },
  {
    id: 4,
    name: "Product Name Goes Here",
    cost: "$123.00",
    sale: "$123.00",
    img: "img/product-4.jpg",
  },
  {
    id: 5,
    name: "Product Name Goes Here",
    cost: "$123.00",
    sale: "$123.00",
    img: "img/product-5.jpg",
  },
  {
    id: 6,
    name: "Product Name Goes Here",
    cost: "$123.00",
    sale: "$123.00",
    img: "img/product-6.jpg",
  },
  {
    id: 7,
    name: "Product Name Goes Here",
    cost: "$123.00",
    sale: "$123.00",
    img: "img/product-7.jpg",
  },
  {
    id: 8,
    name: "Product Name Goes Here",
    cost: "$123.00",
    sale: "$123.00",
    img: "img/product-8.jpg",
  },
];
router.get("/getDay", (req, res) => {
  let day = "";
  const today = new Date();
  switch (today.getDay()) {
    case 0:
      day = "Chu nhat";
      break;
    case 1:
      day = "Thu 2";
      break;
    case 2:
      day = "Thu 3";
      break;
    case 3:
      day = "Thu 4";
      break;
    default:
      day = "NOT FOUND";
      break;
  }

  res.render("getDay", { day: day });
});

router.get("/", (req, res) => {
  res.render("index", { data: products });
});

router.get("/product/:id", (req, res) => {
  const { id } = req.params;
  let result;
  products.forEach((product) => {
    if (product.id === Number(id)) result = product;
  });

  res.render("detail", { data: result });
});
router.get("/insert", (req, res) => {
  res.render("insertProducts");
});

router.post("/insert", (req, res) => {
  const form = formidable({});
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
      res.end(String(err));
      return;
    }
    const filepath = "\\img\\" + files.file.originalFilename;
    const newProduct = {
      id: products.length,
      name: fields.name,
      cost: fields.cost,
      sale: fields.sale,
      img: filepath,
    };
    products.push(newProduct);
  });
  res.redirect("/");
});

module.exports = router;
