import { useState } from 'react';
import style from '@/components/Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () =>
    setCount((count) => {
      if (count >= 5) {
        throw new Error('Counter limit reached');
      }
      return count + 1;
    });
  return (
    <div className={style.container}>
      <div>Count: {count}</div>
      <button className={style.button} onClick={increment}>
        Increment
      </button>
      <p className={style.note}>This throw error when count is greater than 5.</p>
    </div>
  );
};

export default Counter;
