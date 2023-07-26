import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/counter/actions";

const Counter = () => {
  /** Redux Hooks */
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div className='flex items-center space-x-5  border-2 border-black rounded p-10'>
      <button
        onClick={(value) => dispatch(decrement(value))}
        className='bg-black text-white p-2 rounded text-md font-medium'
      >
        Decrement
      </button>
      <span className='text-xl font-medium text-black'>{count}</span>
      <button
        onClick={(value) => dispatch(increment(value))}
        className='bg-black text-white p-2 rounded text-md font-medium'
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
