import React from 'react';

class Home extends React.Component {
	onclickHandler(){
		alert(9)
	}
	render(){
		return (
			<div onClick={e => this.onclickHandler(e)}> this is about </div>
		)
	}
}


export default Home;