import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
	render(){
		return (
			<h2>
		        <p>
		            <Link to="/foo">foo</Link>
		        </p>
		        <p>
		            <Link to="/about">About</Link>
		        </p>
		        <p>
		            <Link to="/404">Not Found</Link>
		        </p>
		        <p>
		            <Link to="/counter">counter</Link>
		        </p>

		    </h2>
		)
	}
}


export default Home;