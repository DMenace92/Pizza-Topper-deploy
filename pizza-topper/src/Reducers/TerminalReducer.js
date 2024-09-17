import { ADD_NEW_MESSAGE } from "../Actions/TerminalActions";

/**
 * Accepted 'type' values: 'topping_change', 'api_call', 'api_success', 'api_fail'
 */
const initState = {
  terminalMessages: [{message:"text",type:"topping_change"}],
};

const TerminalReducer = (state = initState, action) => {

  switch (action.type) {
    case ADD_NEW_MESSAGE:

      return {
       

        ...state,
        terminalMessages: [...state.terminalMessages, action.payload],
      };
      
      default:return state
  }
  
};

export default TerminalReducer;