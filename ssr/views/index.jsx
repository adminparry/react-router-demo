import React from 'react';
import DefaultLayout from './layouts/detault'

class Hello extends React.Component {
    onclickHandler(){
        alert(arguments)
    }
    
    render(){
        const { name, title } = this.props;

        return (
            <DefaultLayout title={title}>
                <div  className="title">fuck {name} </div>
            </DefaultLayout>
        )
    }
}
export default Hello