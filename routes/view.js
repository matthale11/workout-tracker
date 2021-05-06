const router = require("express").Router();

// TODO: /exercise
router.get("/exercise", async (req, res) => {
  try {
    res.render("exercise");
  } catch (err) {
    res.status.json(err);
  }
});

// TODO: /stats
router.get("/stats", async (req, res) => {
  try {
    res.render("stats");
  } catch (err) {
    res.status.json(err);
  }
});

module.exports = router;
