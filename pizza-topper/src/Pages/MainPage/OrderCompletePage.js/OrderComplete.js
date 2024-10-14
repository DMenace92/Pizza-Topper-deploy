import React, { useEffect, useState } from "react";
import usePizzaStore from "../../../stores/usePizzaStore";
import { useParams } from "react-router-dom";
import Styles from "./OrderComplete.module.css";

const OrderComplete = () => {
  const { id: pizzaId } = useParams();
  const { pizzas, getSinglePizzaOrder } = usePizzaStore();
  const [pizzaHold, setPizzahold] = useState([]);

  useEffect(() => {
    if (pizzaId) {
      getSinglePizzaOrder(pizzaId); // Fetch pizza order when component mounts or pizzaId changes
    }
  }, [pizzaId, getSinglePizzaOrder]);

  useEffect(() => {
    // Update pizzaHold when pizzas are updated in the store
    if (pizzas.length > 0) {
      setPizzahold(pizzas);
    }
  }, [pizzas]);
  console.log(pizzas)

  return (
    <div className={Styles.testTextNew}>
      <div className={Styles.receiptViewHolder}>
        <div className={Styles.orderStatusView}>
          <h1>Pizza Order!!!</h1>
          <hr />
          <h4>Large Pizza Topping:</h4>

          {pizzaHold.length > 0 &&
            pizzaHold.map((pizza, index) => (
              <div key={index}>
                {/* Display topping only when true */}
                <p className={pizza.pepperoni =="true"?Styles.displayRecipt:Styles.displayReciptNone}>pepperoni</p>
                <p className={pizza.sausage =="true"?Styles.displayRecipt:Styles.displayReciptNone}>Sausage</p>
                <p className={pizza.ham =="true"?Styles.displayRecipt:Styles.displayReciptNone}>Ham</p>
                <p className={pizza.chicken =="true"?Styles.displayRecipt:Styles.displayReciptNone}>Chicken</p>
                <p className={pizza.bacon =="true"?Styles.displayRecipt:Styles.displayReciptNone}>Bacon</p>
                <p className={pizza.olive =="true"?Styles.displayRecipt:Styles.displayReciptNone}>Olive</p>
                <p className={pizza.pineapple =="true"?Styles.displayRecipt:Styles.displayReciptNone}>Pineapple</p>
                <p className={pizza.spinach =="true"?Styles.displayRecipt:Styles.displayReciptNone}>Spinach</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;



// import React, { useEffect } from "react";
// import usePizzaStore from "../../../stores/usePizzaStore";
// import { useParams } from "react-router-dom";
// import Styles from "./OrderComplete.module.css";

// const OrderComplete = () => {
//   const { id: pizzaId } = useParams();
//   const { pizzas, getSinglePizzaOrder } = usePizzaStore();

//   useEffect(() => {
//     if (pizzaId) {
//       getSinglePizzaOrder(pizzaId); // Fetch pizza when component mounts or pizzaId changes
//     }
//   }, [pizzaId, getSinglePizzaOrder]);

//   return (
//     <div className={Styles.testTextNew}>
//       <div className={Styles.receiptViewHolder}>
//         <div className={Styles.orderStatusView}>
//           <h1>Pizza Order!!!</h1>
//           <hr></hr>
//           {pizzas.length > 0 &&
//             pizzas.map((pizza, index) => (
//               <div key={index}>
//                 <h6 className={Styles.OrderTextOutput}></h6>
//                 <h4>{pizza}</h4>
//               </div>
//             ))}
//         </div>
//         <div className={Styles.orderButtonHolder}>
//           <button>update</button>
//           <button>delete</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderComplete;
