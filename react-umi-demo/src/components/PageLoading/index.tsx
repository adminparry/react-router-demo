import { PageLoading } from '@ant-design/pro-layout';
import React from 'react'
// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
// export default PageLoading;


export default class extends React.PureComponent {

    render(){

        return (
            <PageLoading  tip={"加载中"}/>
        )
    }
}
