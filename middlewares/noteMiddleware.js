exports.handleNoteIdParam = (req, res, next, id) => {
  //   console.log("this log is from handleNoteIdParam ", id);
  req.noteId = id;
  next();
};
