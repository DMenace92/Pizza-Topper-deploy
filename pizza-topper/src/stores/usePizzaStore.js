import { create } from "zustand";
import axios from "axios";

// import { response } from "express";
// const UI_ROUTE = process.env.UI_ROUTE;

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
        `https://9jjl6p-9000.csb.app/create/pizza`,
        selectedToppings
      );
      console.log(`${process.env.UI_ROUTE}/create/pizza`);
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
    console.log(pizzaId);
    try {
      const response = await axios.get(
        `https://9jjl6p-9000.csb.app/fetch/pizza/${pizzaId}` // Interpolate the pizzaId in the URL
      );
      set((state) => ({
        pizzas: [response.data], // Append the fetched pizza data
      }));
    } catch (e) {
      console.log("Error has occurred: ", e);
    }
  },
  // updatePizzaOrder: async (pizzaId, newData) => {
  //   try {
  //     const response = await axios.put(
  //       `http://localhost:9000/update/pizza/${pizzaId}`
  //     );
  //     set((state) => ({
  //       updatePizza: [response.data],
  //     }));
  //   } catch (e) {
  //     console.log("did not work: ", e);
  //   }
  // },
}));

export default usePizzaStore;
