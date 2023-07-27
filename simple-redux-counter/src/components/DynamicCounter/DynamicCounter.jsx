import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dynamicDec, dynamicInc } from "../../redux/dynamicCounter/actions";

const DynamicCounter = () => {
  /** Redux Hooks */
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  return (
    <div className='flex items-center space-x-5  border-2 border-black rounded p-10'>
      <button
        onClick={() => dispatch(dynamicDec(5))}
        className='bg-black text-white p-2 rounded text-md font-medium'
      >
        Decrement
      </button>
      <span className='text-xl font-medium text-black'>{count}</span>
      <button
        onClick={() => dispatch(dynamicInc(5))}
        className='bg-black text-white p-2 rounded text-md font-medium'
      >
        Increment
      </button>
    </div>
  );
};

export default DynamicCounter;
