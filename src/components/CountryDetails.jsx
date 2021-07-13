import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { name } = useParams();

  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => {
        setCountryDetails(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

    
  return (
    <div className="container row">
      <div className="col-md-4">
        {countryDetails.map((details) => (
          <div class="card" style={{ width: "18rem" }}>
            <img src={details.flag} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{details.name}</h5>
              <p class="card-text">{details.capital}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryDetails;
