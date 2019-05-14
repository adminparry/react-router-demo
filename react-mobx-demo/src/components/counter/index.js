import React from "react";

import { observer } from 'mobx-react';
import vm from "../../observables/name";
import CounterVm from "../../observables/counter";


@observer
class Counter extends React.Component {
	render(){

	    return (
	      <div>
	      	<button onClick={ e => CounterVm.increment() }>增加</button>
	      	{CounterVm.count}
	      	<button onClick={ e => CounterVm.decrement() }>减少</button>
	      	{CounterVm.isOdd ? "true" : "false"}
	        <h1>This is mobx-react!</h1>
	        <p>First name: <input type="text" value={vm.firstName} onChange={e => vm.setValue('firstName', e)} /></p>
	        <p>Last name: <input type="text" value={vm.lastName} onChange={e => vm.setValue('lastName', e)} /></p>
	        <p>Full name: {vm.fullName}</p>
	        <p><button onClick={vm.doReset}>Reset</button></p>
	      </div>
	    );

	}
}

export default Counter