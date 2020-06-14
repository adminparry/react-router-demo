import React from 'react';
import classNames from 'classnames';

import styles from './index.less';

const Center = (props) => {
   
  
    return <div {...props} className={classNames(styles.center, props.className)} ></div>
}
const Rows = (props) => {

    return <div {...props} className={classNames(styles.row, props.className)} ></div>
}
const Column = (props) => {

    return <div {...props} className={classNames(styles.column, props.className)} ></div>
}

export { Rows, Column, Center }