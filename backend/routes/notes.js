const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// 1)get all the nodes
router.get("/fetchall", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.json({ error: error.message });
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

// 3)update notes
router.put("/update/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //check for id of user:-
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found");
    }
    if (req.user.id !== note.user.toString()) {
      return res.status(401).send("Unauthorized!!");
    }
    //Find Note
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

// 3)delete notes
router.delete("/delete/:id", fetchuser, async (req, res) => {
  try {
    //check for id of user:-
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found");
    }
    if (req.user.id !== note.user.toString()) {
      return res.status(401).send("Unauthorized!!");
    }
    //Find Note
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ message: "Successfully deleted!!" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
