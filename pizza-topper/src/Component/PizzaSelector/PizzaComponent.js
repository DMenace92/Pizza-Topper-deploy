import React, { useRef } from 'react';
import Styles from './PizzaComponent.module.css';

const PizzaContainer = ({ onToppingChange }) => {
  // Refs for each checkbox
  const pepperoniCheckbox = useRef(null);
  const sausageCheckbox = useRef(null);
  const hamCheckbox = useRef(null);
  const chickenCheckbox = useRef(null);
  const baconCheckbox = useRef(null);
  const oliveCheckbox = useRef(null);
  const pineappleCheckbox = useRef(null);
  const spinachCheckbox = useRef(null);

  const handleInputChange = () => {
    // Get the current checked state of each checkbox
    const selectedToppings = {
      pepperoni: pepperoniCheckbox.current.checked,
      sausage: sausageCheckbox.current.checked,
      ham: hamCheckbox.current.checked,
      chicken: chickenCheckbox.current.checked,
      bacon: baconCheckbox.current.checked,
      olive: oliveCheckbox.current.checked,
      pineapple: pineappleCheckbox.current.checked,
      spinach: spinachCheckbox.current.checked,
    };

    // Log the updated toppings
    // console.log('Selected Toppings:', selectedToppings);

    // Call the parent function with the updated state if provided
    if (onToppingChange) {
      onToppingChange(selectedToppings);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    handleInputChange();
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
        <div className={Styles.pizzaBody}>
          <div className={Styles.selectMeatSection}>
            <h4 className={Styles.selectionBanner}>Meat</h4>
            <label>
              <input
                type="checkbox"
                ref={pepperoniCheckbox}
                name="pepperoni"
                onChange={handleInputChange}
              />
              Pepperoni
            </label>
            <label>
              <input
                type="checkbox"
                ref={sausageCheckbox}
                name="sausage"
                onChange={handleInputChange}
              />
              Sausage
            </label>
            <label>
              <input
                type="checkbox"
                ref={hamCheckbox}
                name="ham"
                onChange={handleInputChange}
              />
              Ham
            </label>
            <label>
              <input
                type="checkbox"
                ref={chickenCheckbox}
                name="chicken"
                onChange={handleInputChange}
              />
              Chicken
            </label>
            <label>
              <input
                type="checkbox"
                ref={baconCheckbox}
                name="bacon"
                onChange={handleInputChange}
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
              />
              Olives
            </label>
            <label>
              <input
                type="checkbox"
                ref={pineappleCheckbox}
                name="pineapple"
                onChange={handleInputChange}
              />
              Pineapple
            </label>
            <label>
              <input
                type="checkbox"
                ref={spinachCheckbox}
                name="spinach"
                onChange={handleInputChange}
              />
              Spinach
            </label>
          </div>
        </div>
        <div className={Styles.pizzaFooter}>
          <button onClick={handleInputSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaContainer;
