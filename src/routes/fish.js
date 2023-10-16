const fishController = require("../controller/FishController")
const router = require("express").Router();


//Get all product
router.get("/", fishController.getAllFish);

router.post("/create", fishController.createEachFish);
// router.get("/edit/:id", productController.getEachProduct);

// router.put("/edit/:id", productController. editEachProduct);
router.delete("/:id", fishController.deleteEachFish);
router.get("/:slug", fishController.getEachFish); 




module.exports = router;