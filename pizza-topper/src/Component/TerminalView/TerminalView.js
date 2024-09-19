import React, { useEffect, useState } from "react";
import Styles from "./TerminalView.module.css";
import useTerminalStore from "../../stores/useTerminalStore";
import usePizzaStore from "../../stores/usePizzaStore";

const TerminalView = () => {
  const { terminalMessages, finalTerminalMessage } = useTerminalStore();
  const { pizzaId } = usePizzaStore();

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={Styles.terminalViewWrapper}>
      <div className={Styles.terminalViewInner}>
        <div>
          <h4>PIZZA TERMINAL</h4>
        </div>

        <div className={Styles.terminalViewTerminal}>
          {terminalMessages.length > 0 &&
            terminalMessages.map((terminalMessage, index) => {
              return (
                <div key={index}>
                  <h6
                    className={
                      terminalMessage.message.includes("remove")
                        ? Styles.toppingRemovedDisplay
                        : Styles.toppingDisplay
                    }
                  >
                    {" "}
                    {terminalMessage.message}
                  </h6>
                </div>
              );
            })}
          {finalTerminalMessage.length > 0 &&
            finalTerminalMessage.map((messageObj, index) => (
              <div key={index}>
                <h6 className={Styles.toppingDisplay}>
                  <p>Loading...</p>
                  {showMessage && <p>{messageObj.message}</p>}
                </h6>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TerminalView;
