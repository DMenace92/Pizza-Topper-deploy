import { combineReducers } from "redux";
import PizzaReducers from './PizzaReducer'
const RootReducer = combineReducers({
    pizza: PizzaReducers,
  
})

export default RootReducer