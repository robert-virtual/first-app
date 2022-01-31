const {
  getAll,
  getOne,
  login,
  register,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const router = require("express").Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", register);
router.post("/login", login);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;
