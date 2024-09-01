import { connect } from 'react-redux';
import PizzaComponent from '../Component/PizzaSelector/PizzaComponent'
import { createPizza, updatePizza, deletePizza } from '../Actions/PizzaActions'


const mapStateToProps = ({ pizza }) => {
    return {
        pizza:pizza.pizza,
        // newPizza:newPizza.newPizza

    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchPizza: (pizza) => {
        //     dispatch(fetchPizza(pizza))
        // },
        createPizza:(pizza)=>{
            dispatch(createPizza(pizza))
        },
        updatePizza:(pizza, newPizza)=>{
            dispatch(updatePizza(pizza, newPizza))
        },
        deletePizza:(pizza)=>{
            dispatch(deletePizza(pizza))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PizzaComponent)