import React from 'react';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			a: 4
		}

	}

	componentDidMount(){
		this.setState({a: 5});
		this.setState({a: 6});
		this.setState({a: 7});

		console.log(this.state.a)
	}
	handlerClick(e) {
		console.log(e)
		alert("success")
	}
	render(){
		console.log("render", this.state.a)
		return (
			<div>
				<span> this is foo </span>
				<button onClick={ this.handlerClick}>双冒号点击测试</button>
			</div>
		)
	}
}


export default Home;