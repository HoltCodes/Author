const Author = require("../models/author.model.js");

  const createAuthor = (req, res) => {
      Author.create(req.body)
        .then((newAuthor) => {
          console.log(newAuthor);
          res.json({ newAuthor });
        })
        .catch((err)=>{
          console.log(err);
          res.status(400).json({err});
        });
    };

  const getOneAuthor = (req, res) => {
      Author.findOne({ _id: req.params.id })
      .then((oneAuthor) => {
        res.json(oneAuthor);
      })
      .catch((err)=>{
        console.log(err);
        res.status(400).json({ err });
      })
    };

  const getAllAuthors = (req, res) => {
      Author.find({})
      .then((allAuthors)=>{
        res.json(allAuthors);
      })
      .catch((err)=>{
        console.log(err);
        res.status(400).json({ err });
      })
    };

  const deleteAuthor = (req, res) => {
      Author.deleteOne({_id: req.params.id})
      .then((deleteAuthor)=>{
        res.json({ deleteAuthor });
      })
      .catch((err)=>{
        console.log(err);
        res.status(400).json({ err });
      })
    };

  const editAuthor = (req, res) => {
      Author.findByIdAndUpdate({_id: req.params.id},
        req.body,
        {
          new:true,
          runValidators:true
        })
        .then((updateAuthor)=>{
          res.json({ updateAuthor });
        })
        .catch((err)=>{
          console.log(err);
          res.status(400).json({ err });
        });
    };

    module.export = {
      createAuthor,
      getOneAuthor,
      getAllAuthors,
      deleteAuthor,
      editAuthor,
    };