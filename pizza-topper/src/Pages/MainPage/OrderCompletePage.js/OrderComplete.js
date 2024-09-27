import React, { useEffect } from "react";
import usePizzaStore from "../../../stores/usePizzaStore";
import { useParams } from "react-router-dom";
import Styles from "./OrderComplete.module.css";

const OrderComplete = () => {
  const { id: pizzaId } = useParams();
  const { pizzas, getSinglePizzaOrder } = usePizzaStore();

  useEffect(() => {
    if (pizzaId) {
      getSinglePizzaOrder(pizzaId); // Fetch pizza when component mounts or pizzaId changes
    }
  }, [pizzaId, getSinglePizzaOrder]);

  return (
    <div className={Styles.testTextNew}>
      <div className={Styles.orderStatusView}>
        {pizzas.length > 0 &&
          pizzas.map((pizza, index) => (
            <div key={index}>
              <h6 className={Styles.OrderTextOutput}>{pizza._id}</h6>
              <h4>{pizza.pepperoni}</h4>
            </div>
          ))}
      </div>
      {/* <div className={Styles.orderButtonHolder}>
        <button>update</button>
        <button>delete</button>
      </div> */}
    </div>
  );
};

export default OrderComplete;
