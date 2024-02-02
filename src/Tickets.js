import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Tickets() {

  const [myCities, setMyCities] = useState("");
  const [mySearch, setMySearch] = useState("");
  const [wordSubmit, setWordSubmit] = useState("MOW");

  const url = `https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?currency=USD&origin=${wordSubmit}`;

  const citySearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    if(mySearch.length !== 3){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "IATA code consists of 3 letters"
      });
    } else {
    setWordSubmit(mySearch);
    }
  }

  useEffect( () => {
    const handleData = async () => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Access-Token': 'c5a9d27351b3fba0d9d6033f002776ff',
          'X-RapidAPI-Key': '95b89d4f8amsh66de7d94e006c46p125806jsnc92049273ca5',
          'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
        }});
        if(response.ok) {
          const result = await response.json();
          setMyCities(result.data);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Code seems to be incorrect"
          });
        }
    }
    handleData()
  }, [wordSubmit]);

  return (
    <div className="App">

      <div className="container-vertical">
        <h1 className="tickets-header">Find your flight</h1>
        <h2 className="small-margin">Find out the most popular directions from a city</h2>
        <h2 className="small-margin">Type your city name in IATA format (like MOW, AYT, NYC, etc.)</h2>
        <h3 className="small">You can check the correct name of your city <a href="https://airportcodes.aero/">here</a></h3>
        <h2 className="orange">This data is provided for the last 48 hours</h2>
        <form className="container-vertical" onSubmit={finalSearch}>
          <input
          placeholder="Search..."
          onChange={citySearch}
          />
          <button onClick={finalSearch}>SEARCH</button>
        </form>

        <div className="hotel-main">
        {Object.values(myCities).map((element, index) => (
        <div className="oneFlight" key={index}>
          <p>From: {element.origin}</p>
          <p>To: {element.destination}</p>
          <p>Airlines: {element.airline}</p>
          <p>Departure time: {element.departure_at}</p>
          <p>Price: ${element.price}</p>
        </div>
      ))}
        </div>

      </div>

    </div>
  );
}

export default Tickets;