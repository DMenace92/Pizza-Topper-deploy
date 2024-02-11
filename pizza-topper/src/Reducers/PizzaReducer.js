import { CREATE_PIZZA_SUCCESS, CREATE_PIZZA_LOADING, CREATE_PIZZA_ERROR, 
    FETCH_PIZZA_SUCCESS, FETCH_PIZZA_LOADING, FETCH_PIZZA_ERROR, 
    UPDATE_PIZZA_SUCCESS,UPDATE_PIZZA_LOADING, UPDATE_PIZZA_ERROR, 
    DELETE_PIZZA_SUCCESS,DELETE_PIZZA_LOADING,DELETE_PIZZA_ERROR
 } from "../Actions/PizzaActions";

    const initState = {
        pizza: [],
        pizzaLoading: false,
        pizzaError: false

    }

    const PizzaReducer = (state = initState, action) => {

        switch (action.type) {
            
            case CREATE_PIZZA_LOADING:
                return {
                    ...state,
                    pizzaLoading: true
                }
            case CREATE_PIZZA_SUCCESS:
                return {
                    pizza: [...state.pizza, action.payload]
                }
            case CREATE_PIZZA_ERROR:
                return {
                    ...state,
                    pizzaError: true
                }
            case FETCH_PIZZA_LOADING:
                return {
                    ...state,
                    pizzaLoading: true
                }
            case FETCH_PIZZA_SUCCESS:
                return {
                    ...state,
                    pizza: action.payload
                }
            case FETCH_PIZZA_ERROR:
                return {
                    ...state,
                    pizzaError: true
    
                }
            case UPDATE_PIZZA_LOADING:
                return {
                    ...state,
                    pizzaLoading: true
                }
    
            case UPDATE_PIZZA_SUCCESS:
                return {
                    ...state,
                    // pizza: state.pizza.map(pizza => pizza.id === action.payload.id ? action.payload : pizza),
                    pizza: state.pizza.filter(pizzas => pizzas.id !== action.payload)
                }

    
            case UPDATE_PIZZA_ERROR:
                return {
                    ...state,
                    pizzaError: true
                }
    
    
            case DELETE_PIZZA_LOADING:
                return {
                    ...state,
                    pizzaLoading: true
                }
            case DELETE_PIZZA_SUCCESS:
                return {
                    ...state,
                    pizza: state.pizza.filter(pizzas => pizzas.id !== action.payload)

                }
            case DELETE_PIZZA_ERROR:
                return {
                    ...state,
                    pizzaError: true
    
                }
    
            default:
                return state
    
        }
    }
    export default PizzaReducer