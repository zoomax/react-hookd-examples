import { INCREAMENT, DECREAMENT } from "./actions";

const increaseCount = function () {
  return {
    type: INCREAMENT,
  };
};
const decreaseCount = function () {
  return {
    type: DECREAMENT,
  };
};

export { increaseCount, decreaseCount };
