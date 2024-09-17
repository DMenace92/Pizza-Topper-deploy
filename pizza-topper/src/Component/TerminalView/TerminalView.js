import React, { useEffect, useState } from "react";
import Styles from "./TerminalView.module.css";
import createNewMessage from "../../Actions/TerminalActions";


const TerminalView = (props) => {
  const { newMessage} = props;
  const [actionMessage, setActionMessage]=useState({})
  // console.log("props.newMessage: ", props.newMessage.terminalMessages);
  // console.log(props.newMessage.terminalMessages, 'final stretch')
// useEffect(()=>{

//     let newObjMessage = { ...newMessage };

//     for (const [topping, selected] of Object.entries(props.pizzaData)) {
//       if (selected) {
//         newObjMessage.terminalMessages.push({message:topping, type:"topping_change"})
//         let testRun = createNewMessage(topping, "topping_change")
//         setActionMessage(testRun.payload)
//         console.log(testRun, "look here")
//        }

//     }



//   },[newMessage, props.pizzaData])

  console.log(actionMessage)



  return (
    <div className={Styles.terminalViewWrapper}>
      <div className={Styles.terminalViewInner}>
        <div>
          <h4>PIZZA TERMINAL</h4>
        </div>

        <div className={Styles.terminalViewTerminal}>
          {props.newMessage.terminalMessages &&
          // using index to eliminate duplicate keys
            props.newMessage.terminalMessages.map((terminalMessage, index) => {
              const getTextStyle = () => {
                switch (terminalMessage.type) {
                  case "topping_change":
                    return Styles.toppingDisplay;
                  default:
                    return Styles.toppingDisplay;
                }
              };

              const textStyle = getTextStyle();

              return (
            //     <p className={textStyle} key={`${terminalMessage.message}-${index}`}>
            //       {terminalMessage.message}


            //     </p>
            //   );
            // })}

            <p className={textStyle} key={`${actionMessage.message}-${index}`}>
            {actionMessage.message}


          </p>
        );
      })}
        </div>
      </div>
    </div>
  );
};

export default TerminalView;
