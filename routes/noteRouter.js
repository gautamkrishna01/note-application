const express = require("express");
const { createNoteController } = require("../controller/noteController");
const router = express.Router();

router.post("/create", createNoteController);

module.exports = router;
