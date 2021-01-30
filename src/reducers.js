
import { INCREAMENT , DECREAMENT} from "./actions" ; 
export default (state = { count: 0 }, { type, payload }) => {
    switch (type) {
      case INCREAMENT:
        return { ...state, count: state.count + 1 };
      case DECREAMENT:
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  }; 