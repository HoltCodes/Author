const mongoose = require("mongoose");

const AuthorSchema = {

  authorName:{
    type: String,
    required:[true, "Must have a name entered"],
    minLength:[3, "Author name must be at least 3 characters"],
  },
};

module.exports = mongoose.model("Author", AuthorSchema);