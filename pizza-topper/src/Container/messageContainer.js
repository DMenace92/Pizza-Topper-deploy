import {connect} from 'react-redux'
import createNewMessage from '../Actions/TerminalActions'
import TerminalView from '../Component/TerminalView/TerminalView'

const mapStateToProps= ({newMessage})=>{
    return{
        newMessage:newMessage
    }
}


const mapDispatchToProps =dispatch=>{
    return{
        createNewMessage:({newMessage})=>{
            dispatch(createNewMessage({newMessage}))
            
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TerminalView)
