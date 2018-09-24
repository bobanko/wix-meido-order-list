export const REQUEST_ORDERS = "REQUEST_ORDERS";
export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const UPDATE_APP = "UPDATE_APP";

export const requestOrders = params => ({
  type: REQUEST_ORDERS,
  params
});

export const receiveOrders = workers => ({
  type: RECEIVE_ORDERS,
  workers,
  receivedAt: Date.now()
});

export const receiveError = error => ({
  type: RECEIVE_ERROR,
  error,
  receivedAt: Date.now()
});

export const updateApp = () => ({
  type: UPDATE_APP
});

// THUNKS ? where to move it?
export const fetchWorkers = params => dispatch => {
  dispatch(requestOrders(params));

  return fetch(`/orders/${params}`) //todo: move fetch to api?
    .then(data => data.json())
    .then(
      workers => dispatch(receiveOrders(workers)),
      error => dispatch(receiveError(error))
    );
};
