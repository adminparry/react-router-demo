import React from 'react';

import Left from './index';
import { Rows , Column } from '@/pages/Test/flex'
import Right from './right'
class Ret extends React.PureComponent {

    render(){

        return (
            <Rows>
                <Left width={0xff} />
                <Right style={{ flex: 1, overflowY: 'scroll' }} >
                    {this.props.children}
                </Right>
            </Rows>
        )
    }
}

export default  Ret