const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// 1)get all the nodes
router.get("/fetchall", fetchuser, async (req, res) => {
  try{
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);}
  catch(error){
    res.json({error:error.message})
  }
});

// 2)add nodes
router.post(
  "/add",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Minimum 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { title, description, tag } = req.body;
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savednote = await note.save();
      res.json(savednote);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
);

module.exports = router;
