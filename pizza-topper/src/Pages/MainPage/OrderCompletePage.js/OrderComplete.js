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
      <div className={Styles.receiptViewHolder}>
        <div className={Styles.orderStatusView}>
          <h1>Pizza Order!!!</h1>
          <hr></hr>
          {pizzas.length > 0 &&
            pizzas.map((pizza, index) => (
              <div key={index}>
                <h6 className={Styles.OrderTextOutput}></h6>
                <h4>{pizza}</h4>
              </div>
            ))}
        </div>
        <div className={Styles.orderButtonHolder}>
          <button>update</button>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
