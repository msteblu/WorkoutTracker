const router = require("express").Router();

router.get("/exercise", (req, res) => {
  if (req.query.id) {
    res.redirect("exercise.html?id=" + req.query.id);
  } else {
    res.redirect("exercise.html");
  }
});

router.get("/stats", (req, res) => {
  res.redirect("stats.html");
});

module.exports = router;
