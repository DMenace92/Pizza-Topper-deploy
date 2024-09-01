import React, {useState} from 'react'
// import PizzaContainer from '../../Component/PizzaSelector/PizzaComponent'
import PizzaContainer from '../../Container/pizzaContainer'
// import TerminalView from '../../Component/TerminalView/TerminalView'
import TerminalView from '../../Container/PizzaTerminalFetch'
import Styles from './MainPage.module.css'

const MainPage =()=>{

    const [pizzaData, setPizzaData] = useState({});

    const handleToppingChange = (updatedToppings) => {
      setPizzaData(updatedToppings);
    };
    return(
        <div>
            <div className={Styles.mainPageWrapper}>
            <div className={Styles.leftComponentArea}>
            <PizzaContainer onToppingChange={handleToppingChange}/>
            </div>
            <div className={Styles.rightComponentArea}>
                
                <TerminalView pizzaData={pizzaData}/>
            </div>
            </div>

        </div>
    )
}
export default MainPage;