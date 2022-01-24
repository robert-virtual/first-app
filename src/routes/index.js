const router = require("express").Router();
const { getAll, create, getOne } = require("../controllers");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);

module.exports = router;
