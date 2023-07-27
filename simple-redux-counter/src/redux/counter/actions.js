import { DECREMENT, INCREMENT } from "./actionTypes";

/** Increment and Decrement Action Creation */

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
