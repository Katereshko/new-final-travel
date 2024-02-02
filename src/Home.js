import Header from "./Header";
import message1 from "./messageLeft.svg";
import message2 from "./ messageRight.svg";

function Home(){
  return(
    <div className="App">
      <Header/>
      <img className="message message-left" alt="message" src={message1}/>
      <img className="message message-right" alt="message" src={message2}/>
    </div>
  )
}

export default Home;