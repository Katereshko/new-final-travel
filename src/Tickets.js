import { useState, useEffect } from "react";

//1 - the popular directions from a city
//token: 

function Tickets() {

  const url = 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions?currency=RUB&origin=MOW';

  const [myCities, setMyCities] = useState("");
 
  useEffect( () => {
    const handleData = async () => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Access-Token': 'c5a9d27351b3fba0d9d6033f002776ff',
          'X-RapidAPI-Key': '95b89d4f8amsh66de7d94e006c46p125806jsnc92049273ca5',
          'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
        }});
      const result = await response.json();
      console.log(result.data);
      setMyCities(result.data);
    }
    handleData()
  }, []);

  return (
    <div className="App">

      <div className="container">
        <h1>Find your flight</h1>
        <h2>Find out the most popular directions from a city</h2>
        <input/>
        <button>SEARCH</button>
        {Object.values(myCities).map((element, index) => (
        <p key={index}>{element.origin}-{element.destination}-{element.airline}-{element.departure_at}-{element.price}RUB</p>
      ))}

      </div>

    </div>
  );
}

export default Tickets;