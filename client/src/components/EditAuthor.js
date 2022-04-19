import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditAuthor = (props) => {
  const { id } = useParams;
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [authorName, setAuthorName] = useState("");


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        setAuthorName(res.data.authorName);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    const putUpdateData = {
      authorName,
    };
    axios
      .put(`http://localhost:8000/api/authors/${id}`, putUpdateData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <header>
        <h1>Edit this Author:</h1>
        <Link to={"/"}>Home</Link>
      </header>
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input
          onChange={(e) => setAuthorName(e.target.value)}
          name="authorName"
          value={authorName}
        />
        {errors.authorName ? <span>{errors.authorName.message}</span> : null}
        <button>Submit</button>
        <button onClick={(e) => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default EditAuthor;