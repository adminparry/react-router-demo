import React from "react";
import { connect } from "react-redux";
import { counter_add_action, counter_take_action, incrementAsync_sagaAction } from "../../reducers/modules/counter";
import "./counter.css";

class Counter extends React.Component {
	render(){
		const { counter, counter_add_action,counter_take_action,counter_async_action } = this.props;
		
		return (
			<div>
				<button onClick={counter_add_action}>增加</button>
				<button onClick={counter_take_action}>减少</button>
				<input onClick={() => counter_async_action(counter)} type="button" value="异步增加" />
				<p>{counter}</p>	
				<svg className="icon-love" width="21" height="17" viewBox="0 0 21 17" xmlns="http://www.w3.org/2000/svg">
				    <title>love</title>
				    <path d="M14.725.032a5.31 5.31 0 0 0-4.687 2.814 5.312 5.312 0 0 0-10 2.498c0 4.763 5.834 7.397 10 11.564 4.306-4.306 10-6.76 10-11.563A5.312 5.312 0 0 0 14.725.032z" fill="#E74C3C" fillRule="evenodd"></path>
				</svg>
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
  counter_async_action: (counter) => dispatch(incrementAsync_sagaAction({user:counter < 10 ? 'zs': 'js',counter:counter}))

})


export default connect(mapStateToProps, mapDispatchToProps)(Counter)