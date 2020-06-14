import React from 'react';

import { Switch } from 'antd';


class Ret extends React.PureComponent {


    state = {
        theme: 'dark',
        current: '1',
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Switch
                checked={this.state.theme === 'dark'}
                onChange={this.changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
        )
    }
}


export default Ret