const fishController = require("../controller/FishController")
const router = require("express").Router();


//Get all product
router.get("/", fishController.getAllFish);

router.post("/create", fishController.createEachFish);
router.get("/update/:slug", fishController.getEachFish);

// router.put("/update/:slug", fishController.editEachFish);
router.delete("/:id", fishController.deleteEachFish);
router.get("/:slug", fishController.getEachFish); 




module.exports = router;