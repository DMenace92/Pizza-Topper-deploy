import { create } from "zustand";
import axios from "axios";
// import { response } from "express";

const usePizzaStore = create((set, get) => ({
  selectedToppings: {
    pepperoni: false,
    sausage: false,
    ham: false,
    chicken: false,
    bacon: false,
    olive: false,
    pineapple: false,
    spinach: false,
  },

  pizzas: [],
  pizzaId: null,

  toggleTopping: (toppingName) => {
    const updatedSelectedToppings = { ...get().selectedToppings };

    updatedSelectedToppings[toppingName] =
      !updatedSelectedToppings[toppingName];

    set({
      selectedToppings: updatedSelectedToppings,
    });
  },

  saveToppingToBackend: async () => {
    try {
      const selectedToppings = get().selectedToppings;
      const response = await axios.post(
        "http://localhost:9000/create/pizza",
        selectedToppings
      );
      const pizzaId = response.data.pizza._id;
      set({
        pizzaId,
      });

      return response;
      //   console.log(response.data.pizza._id);
    } catch (e) {
      console.log("Error has occured: ", e);
    }
  },

  getSinglePizzaOrder: async (pizzaId) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/fetch/pizza/${pizzaId}` // Interpolate the pizzaId in the URL
      );
      set((state) => ({
        pizzas: [...state.pizzas, response.data], // Append the fetched pizza data
      }));
    } catch (e) {
      console.log("Error has occurred: ", e);
    }
  },
}));

export default usePizzaStore;
