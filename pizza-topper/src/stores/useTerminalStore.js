import { create } from "zustand";

const formatCurrentTime = () => {
  const now = new Date();

  // Get the hours, minutes, and seconds
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Convert 24-hour format to 12-hour format
  hours = hours % 12 || 12; // Use '12' for midnight (0 hours)

  // Format minutes and seconds to always be two digits
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  // Return the formatted time string
  return `${hours}:${formattedMinutes}:${formattedSeconds}`;
};

const useTerminalStore = create((set, get) => ({
  terminalMessages: [],
  finalTerminalMessage: [],

  addTerminalMessage: (newMessage, type) => {
    const timeStamp = formatCurrentTime();
    const fullString = `${timeStamp} - ${newMessage}`;

    set((state) => ({
      terminalMessages: [
        ...state.terminalMessages,
        { message: fullString, type },
      ],
    }));
  },
  addSubmitedMessage: (pizza) => {
    let newPizza = pizza.data.pizza._id;
    const timeStamp = formatCurrentTime();
    const time = timeStamp;
    const finalMessage = `http://localhost:3000/${newPizza}`;
    // console.log(finalMessage);

    set((state) => ({
      finalTerminalMessage: [
        ...state.finalTerminalMessage,
        { time: time, message: finalMessage },
      ],
    }));
  },
}));

export default useTerminalStore;
