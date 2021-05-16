const express = require("express");
const { addNote, getAllNotes, updateNote } = require("../controllers/notes");
const { verifyToken } = require("../middlewares/authMiddleware");
const { handleNoteIdParam } = require("../middlewares/noteMiddleware");
const router = express.Router();

router.param("noteId", handleNoteIdParam);

router.post("/add", verifyToken, addNote);
router.put("/update/:noteId", verifyToken, updateNote);
// router.delete("/delete/:noteId", );
router.get("/getallnotes", verifyToken, getAllNotes);

module.exports = router;

// localhost:8000/note/add
// localhost:8000/note/update/:noteId
// localhost:8000/note/update/1
// localhost:8000/note/delete/:noteId
// localhost:8000/note/getallnotes
