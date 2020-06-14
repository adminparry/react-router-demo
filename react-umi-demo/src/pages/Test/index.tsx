import React from 'react';

import { UpCircleOutlined } from '@ant-design/icons'
import classNames from 'classnames';
import styles from './index.less';

import { Rows , Column , Center} from './flex';

import Menu from './menu';

const buttons = [
    {
        title: '智慧环保',
        icon: <UpCircleOutlined style={{fontSize: 20, paddingBottom: 10}} />
    },
    {
        title: '智慧无废',
        icon: <UpCircleOutlined style={{fontSize: 20, paddingBottom: 10}} />
    },
    {
        title: '智慧能源',
        icon: <UpCircleOutlined style={{fontSize: 20, paddingBottom: 10}} />
    },
    
]
class Ret extends React.PureComponent {

    state = {
        current: 0
    }
    onClick(index: number) {

        this.setState({
            current: index
        })
    }
    render() {
        const { current } = this.state;
        const { width } = this.props;

        return (
            <Column className={classNames(styles.gint)} style={{ width: width, minHeight: '100vh',  }}>
                <Center style={{flexDirection: 'column'}}>
                    <p>国家级工业园区</p>
                    <p>绿色发展信息平台</p>
                </Center>
                <Rows style={{justifyContent: "space-around"}} >
                    {
                        buttons.map((item, index) => {
                            return (
                                <Center key={index} style={{flexDirection: 'column'}} className={classNames(styles.hover, {[styles.active]: index==current })} onClick={() => this.onClick(index)}>
                                    
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Center>
                            )
                        })
                    }
                    
                </Rows>
                <div >
                    <Menu />
                </div>
        
                <div style={{ display: 'flex', alignItems: 'flex-end', flex: 1 }} >
                    <div>
                        <p>绿色发展联盟秘书处</p>
                        <p>天津泰达低碳经济促进中心</p>
                        <p>绿色发展联盟秘书处</p>
                    </div>
                    
                        
                </div>
                
            </Column>

        )
    }
}


export default Ret