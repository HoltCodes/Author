import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const NewAuthor =  () => {
  const [errors, setErrors] = useState({});
  const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) =>{
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
        <div className="col-4">
          <Link to="/">Home</Link>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="authorName">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setAuthorName(e.target.value)}
                value={authorName}
              />
              {errors.authorName ? <p>{errors.authorName.message}</p> : null}
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
     
    );
};

export default NewAuthor;