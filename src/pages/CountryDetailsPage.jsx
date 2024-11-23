import { Link, useParams } from "react-router-dom";
import countries from "../assets/countries.json"

function CountryDetails() {
    const { countryId } = useParams();

    const country = countries.find((c) => c.alpha3Code === countryId);

    return (
      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
  
        <h1>{country.name.common}</h1>
  
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {country.borders.map((b) => {
                        const borderCountry = countries.find((c) => c.alpha3Code === b);
                         return (
                            <li key={b}>
                                <Link to={`/${b}`}>{borderCountry.name.common}</Link>
                            </li>
                    );
                    })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default CountryDetails;