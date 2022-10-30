const productController = require("../controller/ProductController")
const router = require("express").Router();


//Get all product
router.get("/", productController.getAllProduct);

router.post("/create", productController.createEachProduct);
// router.get("/edit/:id", productController.getEachProduct);

// router.put("/edit/:id", productController. editEachProduct);
router.delete("/:id", productController.deleteEachProduct);
router.get("/:slug", productController.getEachProduct); 




module.exports = router;