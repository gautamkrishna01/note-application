const noteModel = require("../models/noteModel");

//create the notes
const createNoteController = async (req, resp) => {
  const { title, description } = req.body;
  try {
    if (!title || !description) {
      return resp
        .status(500)
        .json({ message: "Please provide the title and description" });
    }
    const existing = await noteModel.create({ title, description });
    resp.status(200).json({ message: "Note created successfully" });
  } catch (error) {
    resp.status(500).json({ message: "Error creating note" });
  }
};

//get the notes

const getallNotes = async (req, resp) => {
  try {
    const note = await noteModel.find({});
    resp.status(200).json(note);
  } catch (error) {
    resp.status(500).json({ message: "Error creating note" });
  }
};

module.exports = { createNoteController, getallNotes };
