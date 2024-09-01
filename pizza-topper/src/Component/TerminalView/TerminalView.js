import React, { useEffect, useState } from "react";
import Styles from "./TerminalView.module.css";

const TerminalView = ({ pizzaData }) => {
  const [termData, setTermData] = useState({
    pepperoni: "",
    sausage: "",
    ham: "",
    chicken: "",
    bacon: "",
    olive: "",
    pineapple: "",
    spinach: "",
  });
  const [outPutItem, setOutPut] = useState(false)

  useEffect(() => {
    const newTermData = { ...termData };
    const newOutPut =  {...outPutItem};
    let testbol;

    for (const [topping, selected] of Object.entries(pizzaData)) {
        // console.log(topping, selected)
        // // console.log(selected)
        // if(newTermData[selected] ===true){
        //      console.log(newTermData[topping], 'its true')
        // }

      if (selected && !termData[topping]) {
        // console.log(selected)
        newOutPut[selected] = true
        
        newTermData[topping] = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
      } else if (!selected || termData[topping]) {
        console.log(selected)
        console.log(termData[topping])
        
        newTermData[topping] = ""
        newOutPut[selected] = false
      }
    }
    setOutPut(newOutPut)
    setTermData(newTermData);
  }, [pizzaData]); 


  return (
    <div className={Styles.terminalViewWrapper}>
      <div className={Styles.terminalViewInner}>
        <div>
          <h4>PIZZA TERMINAL</h4>
        </div>

        <div className={Styles.terminalViewTerminal}>
          {Object.entries(termData).map(([topping, time]) => (
            time ? (
              <p className={Styles.toppingDisplay} key={topping}>
               {/* {console.log(outPutItem)} */}
                {`${time} - ${topping} was ${termData[topping] === '' ? "removed from" : "added to"} pizza`}

                {/* {`${time} - ${topping} was ${outPutItem != false ? "added to": "removed from"} pizza`} */}
              </p>
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalView;

