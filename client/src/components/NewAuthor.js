import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const NewAuthor =  (props) => {
  const [errors, setErrors] = useState({});
  const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();
  const newSubmitHandler = (e) =>{
    e.preventDefault();
    axios
    .post(`http://localhost:8000/api/authors`, { authorName })
    .then((res) => {
      console.log(res.data);
      navigate("/");
    })
    .catch((err) =>{
      console.log(err);
      setErrors(err.response.data.errors);
    });
  };

    return(
      <div className="container">
      <div className="row">
        <div className="col-8">
          <Link to="/">Home</Link>
          <form onSubmit={newSubmitHandler}>
            <div className="form-group">
              <label htmlFor="authorName">Name</label>
              <input
                onChange={(e) => setAuthorName(e.target.value)}
                name="authorName"
                value={authorName}
              />
               {errors.authorName ? <p>{errors.authorName.message}</p> : null} 
            </div>
            <button className="btn btn-primary" type="submit" value="authorName">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
     
    );
};

export default NewAuthor;