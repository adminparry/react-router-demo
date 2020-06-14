import React from 'react';
import { Center } from '@/pages/Test/flex';
import { AlignLeftOutlined } from '@ant-design/icons';
import { Switch, Avatar, Space, Affix } from 'antd';
import styles from './header.less';
import classNames from 'classnames';
import Shadow from './shadow';

class Ret extends React.PureComponent {

    onChange = (status) => {
        console.log(status)
    }


    render() {
        return (
            <Affix offsetTop={0}>
            <Shadow>
            <Center className={classNames(styles.header)} {...this.props}>
                <div className={classNames(styles.picture)}>我是一张图片</div>
                <div>
                    <Space size={32}>
                        <AlignLeftOutlined />
                        <Switch defaultChecked onChange={ this.onChange } />
                        <Avatar shape={"circle"} />
                        <span className={classNames(styles.title)}>南昌经济技术开发区</span>
                        <AlignLeftOutlined />
                    </Space>
                </div>
            </Center>
            </Shadow>
            </Affix>
        )
    }
}

export default Ret