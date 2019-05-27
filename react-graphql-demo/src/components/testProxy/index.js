import React from "react";
import {graphql, QueryRenderer, createFragmentContainer} from 'react-relay';

export default class TestProxy extends React.Component {
	constructor(props){
		super(props);
		this.state = {text:""};
		this.onSearch = this.onSearch.bind(this)
	}
	onHqlSearch(){
		fetch('/graphql', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			},
			body: JSON.stringify({
			query:`{
			  books{
			    title,
			    author
			  }
			}`
		  })
	})
	  .then(r => r.json())
	  .then(data => this.setState({text: JSON.stringify(data)}));	
	}
	onSearch(){
		const self = this;
		let url = "/sugrec"
		let xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.send();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4 && xhr.status === 200 || xhr.status === 304) { 

				self.setState({text:xhr.responseText})
			}
		}
	}
	onClickHandler(e){
		let fm = new FormData();
		const file = e.target.files[0];

		fm.append('file', file);

		fetch(
		'/user/upload', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Accept': 'application/json',
			},
			body: fm
		})
		.then(r => r.json())
		.then(data => this.setState({text: JSON.stringify(data)}))
	}
	render(){
		
		return (
			<div>
				<input type="text" />
				<button onClick={ e=>this.onSearch(e) }>百度</button>
				<button onClick={ e=>this.onHqlSearch(e) }>google</button>

				<p>result:{this.state.text}</p>
				<input ref="file" type="file" onChange={e => this.onClickHandler(e) } />
				<input  type="button" value="upload" />
			</div>
		)
	}
}