import React from "react";
import { pingEpic,ping,pong } from "../../reducers/pingpong";
import { connect } from "react-redux";

export class PingPong extends React.Component {
	render(){
		console.log(this.props)
		const { pinging, onStartPing, onStartPong } = this.props;

		return (
			<div>
				<h2>is pinging: { pinging.isPinging + "" }</h2>
				<input type="button" value="start ping" onClick={ onStartPing }/>
				<input type="button" value="start pong" onClick={ onStartPong }/>

			</div>
		)
	}
}


export default connect(
state => ({ 
	pinging: state.pingReducer 
}),
dispatch => ({
 	onStartPing: () => dispatch(ping()),
 	onStartPong: () => dispatch(pong())
})
)(PingPong)