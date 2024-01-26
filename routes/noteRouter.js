const express = require("express");
const {
  createNoteController,
  getallNotes,
} = require("../controller/noteController");
const router = express.Router();

router.post("/create", createNoteController);
router.get("/getNotes", getallNotes);

module.exports = router;
