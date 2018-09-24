import { REQUEST_ORDERS, RECEIVE_ORDERS, RECEIVE_ERROR } from "./actions";

const reducer = (
  state = {
    isLoading: false,
    workers: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_ORDERS:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVE_ORDERS:
      return {
        ...state,
        isLoading: false,
        workers: action.workers,
        error: null,
        lastUpdated: action.receivedAt
      };
    case RECEIVE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

export default reducer;
