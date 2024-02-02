import { useState, useEffect } from "react";
import { funData } from "./funData";

function HaveFun(){

  const [myAdvice, setMyAdvice] = useState("");

  const getAdvice = (id) => {
    let randomId = Math.floor(Math.random() * funData.length);
    let randomAdvice = funData[randomId].advice;
    setMyAdvice(randomAdvice);
  }

  useEffect( () => {
    getAdvice()
  }, []);

  return (
    <div className="container-vertical airport">
      <div className="airport-main">

        <div className="container-vertical">
          <h1 className="airport-header">Bored in airport?</h1>
          <h2>Here's a couple of ideas what to do!</h2>
          <p className="advice">{myAdvice}</p>
        </div>

        <div className='container'>
          <button onClick={getAdvice}>New Tip</button>
        </div>

      </div>
    </div>
  );
}

export default HaveFun;
