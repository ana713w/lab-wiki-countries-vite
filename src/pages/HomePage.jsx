import { useState, useEffect  } from "react";
import * as CountriesApi from "../services/country-services";
import { Link } from "react-router-dom";


function HomePage() {
  const [countries, setCountries] = useState([])

  useEffect(()=>{
    CountriesApi.listCountries()
     .then(response => {
        setCountries(response)
     })
     .catch(err => console.error(err))
  },[])


  return (
    <div>
      <div className="list-group ">
        <h1>WikiCountries: Your Guide to the World</h1>
        {countries.map((country) => (
            <Link   key={country._id} className="list-group-item list-group-item-action d-flex flex-column align-items-center" to={country.alpha3Code}
            ><img src= {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />  {country.name.common}</Link>
        ))}
      </div>
    </div>
    )
}

export default HomePage;