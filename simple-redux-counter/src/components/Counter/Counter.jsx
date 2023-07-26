import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../../redux/counter/actions";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className='flex items-center space-x-5  border-2 border-black rounded p-10'>
      <button
        onClick={decrement}
        className='bg-black text-white p-2 rounded text-md font-medium'
      >
        Decrement
      </button>
      <span className='text-xl font-medium text-black'>{count}</span>
      <button
        onClick={increment}
        className='bg-black text-white p-2 rounded text-md font-medium'
      >
        Increment
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
