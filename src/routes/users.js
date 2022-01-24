const { getAll, getOne, login, register } = require("../controllers/users");

const router = require("express").Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", register);
router.post("/login", login);

module.exports = router;
