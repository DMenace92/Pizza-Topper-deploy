import React, { useRef } from "react";
import Styles from "./PizzaComponent.module.css";
import usePizzaStore from "../../stores/usePizzaStore";
import useTerminalStore from "../../stores/useTerminalStore";

const PizzaContainer = () => {
  const { selectedToppings, toggleTopping, saveToppingToBackend, pizzaId } =
    usePizzaStore();
  const { addTerminalMessage, addSubmitedMessage } = useTerminalStore();

  const pepperoniCheckbox = useRef(null);
  const sausageCheckbox = useRef(null);
  const hamCheckbox = useRef(null);
  const chickenCheckbox = useRef(null);
  const baconCheckbox = useRef(null);
  const oliveCheckbox = useRef(null);
  const pineappleCheckbox = useRef(null);
  const spinachCheckbox = useRef(null);

  const handleInputChange = (e) => {
    const terminalMessage = e.target.checked
      ? e.target.name + " added to pizza"
      : e.target.name + " removed from pizza";
    toggleTopping(e.target.name);
    addTerminalMessage(terminalMessage, "topping");
  };

  const handleInputSubmit = async (e) => {
    e.preventDefault();
    const response = await saveToppingToBackend(selectedToppings);
    if (response) {
      const pizzaId = response;
      addSubmitedMessage(pizzaId);
    } else {
      console.log("did not work");
    }
  };

  return (
    <div className={Styles.mainPizzaComponentWrapper}>
      <div className={Styles.pizzaComponentContainer}>
        <div className={Styles.pizzaHeadder}>
          <h4 className={Styles.customizeText}>Customize your pie!</h4>
          <div className={Styles.workMagicLine}>
            <h6 className={Styles.magicLine}>_________________</h6>
          </div>
        </div>
        <form onSubmit={handleInputSubmit}>
          {/* {handleAfter} */}
          <div className={Styles.pizzaBody}>
            <div className={Styles.selectMeatSection}>
              <h4 className={Styles.selectionBanner}>Meat</h4>
              <label>
                <input
                  type="checkbox"
                  ref={pepperoniCheckbox}
                  name="pepperoni"
                  onChange={handleInputChange}
                  checked={selectedToppings["pepperoni"]}
                />
                Pepperoni
              </label>
              <label>
                <input
                  type="checkbox"
                  ref={sausageCheckbox}
                  name="sausage"
                  onChange={handleInputChange}
                  checked={selectedToppings["sausage"]}
                />
                Sausage
              </label>
              <label>
                <input
                  type="checkbox"
                  ref={hamCheckbox}
                  name="ham"
                  onChange={handleInputChange}
                  checked={selectedToppings["ham"]}
                />
                Ham
              </label>
              <label>
                <input
                  type="checkbox"
                  ref={chickenCheckbox}
                  name="chicken"
                  onChange={handleInputChange}
                  checked={selectedToppings["chicken"]}
                />
                Chicken
              </label>
              <label>
                <input
                  type="checkbox"
                  ref={baconCheckbox}
                  name="bacon"
                  onChange={handleInputChange}
                  checked={selectedToppings["bacon"]}
                />
                Bacon
              </label>
            </div>
            <div className={Styles.selectVeggieSection}>
              <h4 className={Styles.selectionBanner}>Veggies</h4>
              <label>
                <input
                  type="checkbox"
                  ref={oliveCheckbox}
                  name="olive"
                  onChange={handleInputChange}
                  checked={selectedToppings["olive"]}
                />
                Olives
              </label>
              <label>
                <input
                  type="checkbox"
                  ref={pineappleCheckbox}
                  name="pineapple"
                  onChange={handleInputChange}
                  checked={selectedToppings["pineapple"]}
                />
                Pineapple
              </label>
              <label>
                <input
                  type="checkbox"
                  ref={spinachCheckbox}
                  name="spinach"
                  onChange={handleInputChange}
                  checked={selectedToppings["spinach"]}
                />
                Spinach
              </label>
            </div>
          </div>
          <div className={Styles.pizzaFooter}>
            <button type="submit" className={Styles.orderSubmitButton}>
              Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PizzaContainer;
