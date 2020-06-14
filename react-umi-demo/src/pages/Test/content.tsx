import React from 'react';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import classNames from 'classnames';

import styles from './content.less'
class Ret extends React.PureComponent {

    renderTabBar = (props, DefaultTabBar) => {
        return (
            <Sticky bottomOffset={80}>
            {({ style }) => (
              <DefaultTabBar {...props} className={classNames(styles.customSelect)} style={{ ...style }} />
            )}
          </Sticky>
        )
    }
    render() {
        const { children } = this.props;


        return (
            <StickyContainer>

            
                <Tabs tabPosition={"bottom"} renderTabBar={this.renderTabBar}>
                    
                    { Array.isArray(children) ? children.map((item, index) => {
                        return (
                            <Tabs.TabPane className={classNames(styles.margin)} tab={item!.props!.title} key={index}>
                                {item}
                            </Tabs.TabPane>
                        )
                    })
                    : null
                }
                   
                </Tabs>
            </StickyContainer>
        )
    }
}

export default Ret