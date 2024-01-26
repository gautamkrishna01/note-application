const noteModel = require("../models/noteModel");

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
  } catch (error) {}
};
module.exports = { createNoteController };
