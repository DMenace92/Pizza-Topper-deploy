import React from "react";
import PizzaContainer from "../../Component/PizzaSelector/PizzaComponent";
import TerminalView from "../../Component/TerminalView/TerminalView";

import Styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div>
      <div className={Styles.mainPageWrapper}>
        <div className={Styles.leftComponentArea}>
          <PizzaContainer />
        </div>
        <div className={Styles.rightComponentArea}>
          <TerminalView />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
