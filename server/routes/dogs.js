var express = require("express");
var router = express.Router();

const controller = require("../controllers/dogs");

router.get("/", controller.getAllDogs);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getDogById);

router.delete("/:id", controller.deleteDog);

router.put("/:id", controller.updateDog);

router.post("/", controller.createDog);

module.exports = router;
