const Author = require('../models/author.model');

module.exports = {


    createAuthor: (req, res)=>{
      Author.create(req.body)
        .then((newAuthor)=>{
          console.log(newAuthor);
          res.json(newAuthor)
        })
        .catch((err)=>{
          console.log(err);
          res.status(400).json(err);
        })
    },

    getOneAuthor: (req, res)=>{
      Author.findById({_id: req.params.id})
      .then((oneAuthor)=>{
        res.json(oneAuthor);
      })
      .catch((err)=>{
        console.log(err);
        res.status(400).json(err);
      })
    },

    getAllAuthors: (req, res) =>{
      Author.find({})
      .then((allAuthors)=>{
        res.json(allAuthors);
      })
      .catch((err)=>{
        console.log(err);
        res.status(400).json(err);
      })
    },

    deleteAuthor: (req, res)=>{
      Author.deleteOne({_id: req.params.id})
      .then((deleteAuthor)=>{
        res.json(deleteAuthor);
      })
      .catch((err)=>{
        console.log(err);
        res.status(400).json(err);
      })
    },

    editAuthor: (req, res) =>{
      Author.findByIdAndUpdate({_id: req.params.id},
        req.body,
        {
          new:true,
          runValidators:true
        })
        .then((updateAuthor)=>{
          res.json(updateAuthor);
        })
        .catch((err)=>{
          console.log(err);
          res.status(400).json(err);
        })
    },

}