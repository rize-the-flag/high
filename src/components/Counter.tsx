import React, {useState} from 'react';
import './Counter.scss'
export const Counter = () => {
  const [value, setValue] = useState(0);
  const onClick = (value: number) => setValue(v => v + value);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => onClick(1)}>+</button>
      <button onClick={() => onClick(-1)}>-</button>
    </div>
  );
};

export default Counter;

