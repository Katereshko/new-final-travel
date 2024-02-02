import {data} from './data';
import {useState} from 'react';

function Hotels() {

  const [hotel, setHotel] = useState(0);
  const {id, name, description, city, image} = data[hotel];

  const previousHotel = () =>{
    setHotel((hotel => {
      hotel--;
      if(hotel < 0){
        hotel = data.length - 1;
      }
      return hotel;
    }))
  }

  const nextHotel = () =>{
    setHotel((hotel => {
      hotel++;
      if(hotel > data.length -1){
        hotel = 0;
      }
      return hotel;
    }))
  }

  return(

    <div className="container-vertical hotels">
      
      <div className="hotel-main">

        <div className="container-vertical">
          <h1 className="airport-header">Learn about the top 5 hotels!</h1>
        </div>
        <div className="container">
          <h2>{id} - {name}</h2>
        </div>
        <div className="container">
          <button onClick={previousHotel}>Previous</button>
          <button onClick={nextHotel}>Next</button>
        </div>
        <div className="container">
          <img src={image} width="300px" alt="hotel"/>
        </div>
        <div className="container">
          <h3>Located in: {city}</h3>
        </div>
        <div className="container">
          <p>{description}</p>
        </div>

      </div>

    </div>
    )
    }

export default Hotels;

