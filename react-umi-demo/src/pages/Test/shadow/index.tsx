import React from 'react';
import classNames from 'classnames';
import styles from './index.less'

class Ret extends React.PureComponent {
    render() {
        return (
            <div className={classNames(styles.shadow)} {...this.props}></div>
        )
    }
}


export default Ret