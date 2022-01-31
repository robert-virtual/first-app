const router = require("express").Router();
const {
  getAll,
  create,
  getOne,
  photo,
  update,
  deletePerson,
} = require("../controllers");
// multer
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// multer

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deletePerson);
router.post("/photo", upload.single("profile"), photo);

module.exports = router;
