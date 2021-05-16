const client = require("../configs/db");

exports.addNote = (req, res) => {
  const { heading, content } = req.body;

  client.query(
    `INSERT INTO notes (email, heading, content) VALUES ('${req.email}')`
  );
};
