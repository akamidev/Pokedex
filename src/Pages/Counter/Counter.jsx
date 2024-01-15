import { useState } from 'react';

function Counter() {

  const [counter, setCounter] = useState(0)

  const minus = () => {
    setCounter(counter - 1)
  }

  const plus = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <button onClick={minus}>-</button>
      <p>{counter}</p>
      <button onClick={plus}>+</button>
    </>
  );
}

export default Counter;
