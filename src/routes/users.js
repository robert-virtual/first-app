const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    msg: "Hola mundo",
  });
});

module.exports = router;
