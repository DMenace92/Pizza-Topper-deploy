export const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

const createNewTerminalDateTime = () => {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

/**
 * Accepted 'type' values: 'topping_change', 'api_call', 'api_success', 'api_fail'
 */
const createNewMessage = (newMessage, type) => {
  const action = {
    type: ADD_NEW_MESSAGE,
    payload: { message: createNewTerminalDateTime() + " " + newMessage, type },
  };

  // Logging the payload after it's created
  console.log(action.payload);

  return action;
};

// const createNewMessage = (newMessage, type) => ({
//   type: ADD_NEW_MESSAGE,
//   payload: {message:createNewTerminalDateTime() + newMessage, type},

// }
// );

export default createNewMessage;
