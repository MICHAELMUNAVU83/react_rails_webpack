import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "./greetings";
function Greeting() {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings.greetings);

  console.log(greetings);
  const handleClick = () => {
    dispatch(fetchGreeting());
  };

  const displayGreetings = greetings.map((greeting) => (
    <li key={greeting.id}>{greeting.greeting}</li>
  ));
  return (
    <div>
      Greetings
      {displayGreetings}
      <button onClick={handleClick}>Display Greeting</button>
    </div>
  );
}

export default Greeting;
