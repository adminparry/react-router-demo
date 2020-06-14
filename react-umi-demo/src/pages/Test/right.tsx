import React from 'react';
import Header from './header'
import { Column } from '@/pages/Test/flex';
import Tabbar from './tabbar';
import Content from './container';

class Ret extends React.PureComponent {

    render() {
        return (
            <Column {...this.props}>

                <Header />
                <Column style={{padding: 40}}>
                    <Tabbar />
                    {/* <Content /> */}
                    {this.props.children}
                </Column>
                

            </Column>
        )
    }
}

export default Ret