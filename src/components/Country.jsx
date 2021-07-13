import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => {
  const { name, flag, capital } = props.country;
  return (
    <div className="col-md-4">
      <div class="card" style={{ width: "18rem" }}>
        <img src={flag} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{capital}</p>
          <Link to={`/details/${name}`} class="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Country;
