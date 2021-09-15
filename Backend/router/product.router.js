//import express
let express = require("express");
//set up router
let router = express.Router();
//import controller
let productController = require("../controller/product.controller");


router.get("/getAllProducts",productController.getAllProductDetails);
router.post("/storeProduct",productController.storedProductInfo);
router.delete("/deleteProduct/:pid",productController.deleteProductInfo);
router.put("/updateProduct",productController.updateProductDetails);

module.exports=router;