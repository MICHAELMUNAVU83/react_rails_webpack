import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "./greetings";
function Greeting() {
  const dispatch = useDispatch();
  const [randomizedGreeting, setRandomizedGreeting] = useState("");
  const greetings = useSelector((state) => state.greetings.greetings);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  const handleClick = () => {
    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    setRandomizedGreeting(randomGreeting.greeting);
  };

  return (
    <div>
      Greetings
      <div>
        <button onClick={handleClick}>Display Greeting</button>
      </div>
      <div>
        <h1>{randomizedGreeting}</h1>
      </div>
    </div>
  );
}

export default Greeting;
