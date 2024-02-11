import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function PizzaComponent(props, { createPizza }, args) {
  const [modal, setModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const toggle = () => setModal(!modal);

  const [topping, setTopping] = useState({
    pepperoni: false,
    sausage: false,
    ham: false,
    chicken: false,
    bacon: false,
    olives: false,
    pineapple: false,
    spinach: false,
    // pepperoni: "",
    // sausage: "",
    // ham: "",
    // chicken: "",
    // bacon: "",
    // olives: "",
    // pineapple: "",
    // spinach: ""
  });
  const [updateToppings, setUpdateToppings] = useState({
    pepperoni: false,
    sausage: false,
    ham: false,
    chicken: false,
    bacon: false,
    olives: false,
    pineapple: false,
    spinach: false,
    // pepperoni: "",
    // sausage: "",
    // ham: "",
    // chicken: "",
    // bacon: "",
    // olives: "",
    // pineapple: "",
    // spinach: ""
  });

  //   const [newTopping, setNewTopping] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault();
    props.createPizza(topping);
    setTopping({
      pepperoni: false,
      sausage: false,
      ham: false,
      chicken: false,
      bacon: false,
      olives: false,
      pineapple: false,
      spinach: false,
      // pepperoni: "",
      // sausage: "",
      // ham: "",
      // chicken: "",
      // bacon: "",
      // olives: "",
      // pineapple: "",
      // spinach: ""
    });
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setTopping((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const handleUpdateChange = (e) => {
    const { name, checked } = e.target;
    setUpdateToppings((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleDelete = (pizza) => {
    props.deletePizza(pizza);
    //reload screen to display current states
    window.location.reload();
    console.log(pizza);
  };
  useEffect(() => {
    props.fetchPizza();

    console.log(props.pizza);
  }, []);

  const handleUpdate = () => {
    props.updatePizza(selectedPizza, updateToppings);
    console.log(selectedPizza, "right here");
    console.log(updateToppings, "updated data");
    setModal(false);
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="rightContainer">
        <div>
          <label>Add Toppings</label>
          <div className="toppingCategory">
            <form>
              <div className="meatToppings">
                <label>Meat</label>
                <hr />
                <label className="toppingLabel">
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="pepperoni"
                      checked={topping.pepperoni}
                      onChange={handleChange}
                    />{" "}
                    Pepperoni
                  </label>
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="sausage"
                      checked={topping.sausage}
                      onChange={handleChange}
                    />{" "}
                    Sausage
                  </label>
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="ham"
                      checked={topping.ham}
                      onChange={handleChange}
                    />{" "}
                    Ham
                  </label>
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="chicken"
                      checked={topping.chicken}
                      onChange={handleChange}
                    />{" "}
                    Chicken
                  </label>
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="bacon"
                      checked={topping.bacon}
                      onChange={handleChange}
                    />{" "}
                    Bacon
                  </label>
                </label>
              </div>
              <div className="veggieToppings">
                <br />
                <label>Veggie</label>
                <hr />
                <label className="toppingLabel">
                  <input
                    type="checkbox"
                    name="olives"
                    checked={topping.olives}
                    onChange={handleChange}
                  />{" "}
                  Olives
                </label>
                <label className="toppingLabel">
                  <input
                    type="checkbox"
                    name="pineapple"
                    checked={topping.pineapple}
                    onChange={handleChange}
                  />{" "}
                  Pineapple
                </label>
                <label className="toppingLabel">
                  <input
                    type="checkbox"
                    name="spinach"
                    checked={topping.spinach}
                    onChange={handleChange}
                  />{" "}
                  Spinach
                </label>
              </div>
              <br />
              <button onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="leftContainer">
        {props.pizza &&
          props.pizza.map((pizzas) => (
            <div className="pizzaItem" key={pizzas}>
              <div className="meatSide">
                <h5>Meat</h5>
                <h6>Pepperoni: {pizzas.pepperoni}</h6>
                <h6>Sausage: {pizzas.sausage}</h6>
                <h6>Ham: {pizzas.ham}</h6>
                <h6>Chicken: {pizzas.chicken}</h6>
                <h6>Bacon: {pizzas.bacon}</h6>
              </div>

              <div className="veggieSide">
                <h5>veggies</h5>
                <h6>Olives: {pizzas.olives}</h6>
                <h6>Pineapple: {pizzas.pineapple}</h6>
                <h6>Spinach: {pizzas.spinach}</h6>
              </div>
              <button
                className="buttonDesign"
                onClick={() => {
                  setSelectedPizza(pizzas._id);
                  toggle();
                }}
              >
                Edit
              </button>
              <button
                className="buttonDesign1"
                onClick={() => handleDelete(pizzas._id)}
              >
                Delete
              </button>
              {/* mondal */}
              <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Update Toppings</ModalHeader>
                <ModalBody>
                  <h6>{selectedPizza}</h6>

                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="pepperoni"
                      checked={updateToppings.pepperoni}
                      onChange={handleUpdateChange}
                    />{" "}
                    Pepperoni
                  </label>
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="sausage"
                      checked={updateToppings.sausage}
                      onChange={handleUpdateChange}
                    />{" "}
                    Sausage
                  </label>
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="ham"
                      checked={updateToppings.ham}
                      onChange={handleUpdateChange}
                    />{" "}
                    Ham
                  </label>
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="chicken"
                      checked={updateToppings.chicken}
                      onChange={handleUpdateChange}
                    />{" "}
                    Chicken
                  </label>
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="bacon"
                      checked={updateToppings.bacon}
                      onChange={handleUpdateChange}
                    />{" "}
                    Bacon
                  </label>
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="olives"
                      checked={updateToppings.olives}
                      onChange={handleUpdateChange}
                    />{" "}
                    Olives
                  </label>
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="pineapple"
                      checked={updateToppings.pineapple}
                      onChange={handleUpdateChange}
                    />{" "}
                    Pineapple
                  </label>
                  <label className="toppingLabel">
                    <input
                      type="checkbox"
                      name="spinach"
                      checked={updateToppings.spinach}
                      onChange={handleUpdateChange}
                    />{" "}
                    Spinach
                  </label>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={handleUpdate}>
                    Update
                  </Button>
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
              {/* modal end */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default PizzaComponent;
