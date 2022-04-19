import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const AllAuthors = () => {
  const [authorList, setAuthorList] = useState([]);
  useEffect(() => {
    axios 
    .get("http://localhost:8000/api/authors")
    .then((res) => {
      console.log(res);
      console.log(res.data);
      setAuthorList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const deleteHandler = (id) => {
    axios
    .delete(`http:localhost:8000/api/authors/${id}`)
    .then((res) => {
      console.log(res.data);
      const filteredAuthors = AllAuthors.filter((author) => {
        return author._id !== id;
      });
      setAuthorList(filteredAuthors);
    })
    .catch((err)=>{
      console.log(err);
    });
  };

  return ( 
    <div className="container">
    <div className="row">
      <div className="col-8">
        <Link to="/new">Add an author</Link>
        <p className="purple-text">We have quotes by:</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Author</th>
              <th scope="col">Actions Available</th>
            </tr>
          </thead>
          <tbody>
            {authorList.map((author, id) => {
              return (
                <tr key={author._id}>
                  <td>{author.name}</td>
                  <td>
                    <Link to={`/edit/${author._id}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>

                    <button
                      onClick={() => deleteHandler(author._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default AllAuthors;