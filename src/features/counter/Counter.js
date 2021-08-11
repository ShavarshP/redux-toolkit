import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  incrementМultiply,
  changeMin,
  changeMax,
  selectMax,
  selectCount,
  selectMin,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const [min, setmin] = useState(useSelector(selectMin));
  const [max, setmax] = useState(useSelector(selectMax));

  const incrementValue = Number(incrementAmount) || 0;
  const minValue = Number(min) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        min{" "}
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={min}
          onChange={(e) => {
            setmin(e.target.value);
            dispatch(changeMin(minValue));
          }}
        />
        max{" "}
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={max}
          onChange={(e) => {
            setmax(e.target.value);
            dispatch(changeMax(minValue));
          }}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementМultiply(incrementValue))}
        >
          Мultiply
        </button>
      </div>
    </div>
  );
}
