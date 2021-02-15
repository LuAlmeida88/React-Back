import React  from 'react'
import { connect} from 'react-redux'

import { actions} from '../actions/counter'

const Counter = ({ counter, decrement, increment  }) => (

    <>

    <h1> Contador: { counter } </h1>
    <ul>
        <li><button onClick= {decrement}>Decrement</button></li><br />
        <li><button onClick= {increment}>Increment</button></li>
       
    </ul>
    </>
)
const mapStateToProps = state => ({
    counter: state.counterReducers.counter

})
const mapDispatchProps = dispatch => ({
    decrement: () => dispatch(actions.decrement()),
    increment: () => dispatch(actions.increment())
    
})
export default connect(mapStateToProps, mapDispatchProps) (Counter)