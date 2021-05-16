const express = require("express");
const { addNote } = require("../controllers/notes");
const { verifyToken } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/add", verifyToken, addNote);
// router.delete("/delete/:noteId", );
// router.put("/update/:noteId", );
// router.get("/getallnotes", );

//Middleware

module.exports = router;

// localhost:8000/note/add   //
// localhost:8000/note/update/:noteId
// localhost:8000/note/delete/:noteId
// localhost:8000/note/getallnotes
