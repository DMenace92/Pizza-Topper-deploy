import { combineReducers } from "redux";
import PizzaReducers from './PizzaReducer'
import TerminalReducer from "./TerminalReducer";
const RootReducer = combineReducers({
    pizza: PizzaReducers,
    newMessage:TerminalReducer

  
})

export default RootReducer