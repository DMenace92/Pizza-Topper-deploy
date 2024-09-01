import {connect} from 'react-redux';
import { fetchPizza } from '../Actions/PizzaActions';
import TerminalView from '../Component/TerminalView/TerminalView';

const mapStateToProps=({pizza})=>{
    return{
        pizza:pizza
    }
   
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchPizza:(pizza)=>{
            dispatch(fetchPizza(pizza))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TerminalView)