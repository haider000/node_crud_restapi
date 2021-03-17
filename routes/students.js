const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const student = new Student({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });

  try {
    const s = await student.save();
    res.json(s);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    student.sub = req.body.sub;
    const s = await student.save()
    res.json(s)
  } catch (err) {
      res.send("Error")
  }
});
module.exports = router;
