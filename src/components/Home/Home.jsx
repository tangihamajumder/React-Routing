import axios from "axios";
import React, { useEffect, useState } from "react";
import Country from "../Country";

const Home = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountry(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="row ms-auto me-auto">
        {country.map((countries) => (
          <Country country={countries} />
        ))}
      </div>
    </div>
  );
};

export default Home;
