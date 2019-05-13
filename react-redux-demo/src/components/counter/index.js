import React from "react";
import { connect } from "react-redux";
import { counter_add_action, counter_take_action } from "../../reducers/counter";

class Counter extends React.Component {
	render(){
		const { counter, counter_add_action,counter_take_action } = this.props;
		
		return (
			<div>
				<button onClick={counter_add_action}>增加</button>
				<button onClick={counter_take_action}>减少</button>
				<p>{counter}</p>	
			</div>
		)
	}
}
const mapStateToProps = state => ({
  counter: state.counterReducer
})

const mapDispatchToProps = dispatch => ({
  counter_add_action: () => dispatch(counter_add_action()),
  counter_take_action: () => dispatch(counter_take_action()),

})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)