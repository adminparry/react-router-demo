import React, { useState, useEffect } from 'react';


const Counter = props => {

	const { className, style } = props;

	const { count, setCount } = useState(props.count);

	useEffect(() => {

	}, []);

	const incretement = () => {
		setCount(count++);
	}
	const discreatement = () => {
		setCount(count--);
	}

	return (
		<div>
			<button onClick={incretement}>+</button>
			{count}
			<button onClick={discreatement}>-</button>

		</div>
	)
}

Counter.defaultProps = {

}

export default Counter;