import React from 'react';
import { Rows, Center } from '@/pages/Test/flex';
import { HomeOutlined , CloseCircleOutlined} from '@ant-design/icons';
import classNames from 'classnames';
import styles from './tabbar.less';

class Ret extends React.PureComponent {

    // 初始化的时候一个tab url
    
    onTab = () => {

    }
    onClose = () => {

    }
    render() {
        return (
            <Rows style={{marginBottom: 30}}>
                
                <Center className={classNames(styles.home)}>
                    <HomeOutlined />
                </Center>
                <Rows className={classNames(styles.tab)}>
                    <Center className={classNames(styles.bar)} onClick={this.onTab}>
                        <span>新闻动态</span>
                    </Center>
                    
                    <Center className={classNames(styles.close)} onClick={this.onClose}>
                        <CloseCircleOutlined style={{fontSize: 14, padding: '0 14px'}}/>
                    </Center>
                    
                </Rows>
                
            </Rows>
        )
    }
}

export default Ret