import { DYNAMCI_DEC, DYNAMCI_INC } from "./actionTypes";

export const dynamicInc = (value) => {
  return {
    type: DYNAMCI_INC,
    payload: value,
  };
};

export const dynamicDec = (value) => {
  return {
    type: DYNAMCI_DEC,
    payload: value,
  };
};
