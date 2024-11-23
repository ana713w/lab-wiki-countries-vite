import { Link } from "react-router-dom";
import countries from "../assets/countries.json"

function HomePage() {
    return (
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>
  
        <div className="list-group">
            {countries.map((country) => (
                <Link 
                    key={country.alpha2Code}
                    className="list-group-item list-group-item-action"
                    to={`/${country.alpha3Code}`} 
                >
                    <img 
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLocaleLowerCase()}.png`}
                        alt={`${country.name.common} flag`}
                        style={{width: "20px", height:"16px", marginRight: '10px'}}
                    />
                    {country.name.common}
                </Link>
            ))}
        </div>
      </div>
    );
  }
  
  export default HomePage;