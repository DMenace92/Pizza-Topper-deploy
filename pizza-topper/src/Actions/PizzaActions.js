const ApiCall = process.env.REACT_APP_API_CALL
console.log(ApiCall)
// import env from "react-dotenv"
//create drug
export const CREATE_PIZZA_SUCCESS = "CREATE_PIZZA_SUCCESS";
const createPizzaSuccess = (pizza) => ({
  type: CREATE_PIZZA_SUCCESS,
  payload: pizza,
});

export const CREATE_PIZZA_LOADING = "CREATE_PIZZA_LOADING";
const createPizzaLoading = () => ({ type: CREATE_PIZZA_LOADING });

export const CREATE_PIZZA_ERROR = "CREATE_PIZZA_ERROR";
const createPizzaError = () => ({ type: CREATE_PIZZA_ERROR });

//fetch single drug
export const FETCH_PIZZA_SUCCESS = "FETCH_PIZZA_SUCCESS";
const fetchPizzaSuccess = (pizza) => ({
  type: FETCH_PIZZA_SUCCESS,
  payload: pizza,
});

export const FETCH_PIZZA_LOADING = "FETCH_PIZZA_LOADING";
const fetchPizzaLoading = () => ({ type: FETCH_PIZZA_LOADING });

export const FETCH_PIZZA_ERROR = "FETCH_PIZZA_ERROR";
const fetchPizzaError = () => ({ type: FETCH_PIZZA_ERROR });

//update
export const UPDATE_PIZZA_SUCCESS = "UPDATE_PIZZA_SUCCESS";
const updatePizzaSuccess = (pizzaId, newPizza) => ({
  type: UPDATE_PIZZA_SUCCESS,
  payload: { pizzaId, newPizza },
});

export const UPDATE_PIZZA_LOADING = "UPDATE_PIZZA_LOADING";
const updatePizzaLoading = () => ({ type: UPDATE_PIZZA_LOADING });

export const UPDATE_PIZZA_ERROR = "UPDATE_PIZZA_ERROR";
const updatePizzaError = () => ({ type: UPDATE_PIZZA_ERROR });

//delete
export const DELETE_PIZZA_SUCCESS = "DELETE_PIZZA_SUCCESS";
const deletePizzaSuccess = (pizza) => ({
  type: DELETE_PIZZA_SUCCESS,
  payload: pizza,
});

export const DELETE_PIZZA_LOADING = "DELETE_PIZZA_LOADING";
const deletePizzaLoading = () => ({ type: DELETE_PIZZA_LOADING });

export const DELETE_PIZZA_ERROR = "DELETE_PIZZA_ERROR";
const deletePizzaError = () => ({ type: DELETE_PIZZA_ERROR });

//thunk functions

// create Drug Thunk

export const createPizza = (pizza) => (dispatch) => {
  dispatch(createPizzaLoading());
  fetch(`${ApiCall}/create/pizza`, {
    method: "POST",
    body: JSON.stringify(pizza),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((pizza) => {
      dispatch(createPizzaSuccess(pizza));
    })
    .catch((err) => {
      dispatch(createPizzaError(err));
    });
};

//fetch Drug thunk
export const fetchPizza = (pizza) => (dispatch) => {
  dispatch(fetchPizzaLoading());
  fetch(`${ApiCall}/fetch/pizza`, {
    method: "GET",
    body: JSON.stringify(pizza),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((pizza) => {
      dispatch(fetchPizzaSuccess(pizza));
    })
    .catch((err) => {
      dispatch(fetchPizzaError(err));
    });
};

//update Drug Thunk
export const updatePizza = (pizzaId, newPizza) => (dispatch) => {
  console.log(pizzaId, newPizza, "update actions");
  dispatch(updatePizzaLoading());
  fetch(`${ApiCall}/update/pizza/${pizzaId}`, {
    method: "PATCH",
    body: JSON.stringify(newPizza),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((newPizza) => {
      dispatch(
        updatePizzaSuccess(newPizza),
        console.log(newPizza, "in the actions")
      );
    })
    .catch((err) => {
      dispatch(updatePizzaError(err));
    });
};

//Delete Drug Thunk
export const deletePizza = (pizza) => (dispatch) => {
  dispatch(deletePizzaLoading());
  fetch(`${ApiCall}/delete/pizza/${pizza}`, {
    method: "DELETE",
    // body: JSON.stringify(pizza),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((pizza) => {
      dispatch(deletePizzaSuccess(pizza));
    })
    .catch((err) => {
      dispatch(deletePizzaError(err));
    });
};