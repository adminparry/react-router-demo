import React from 'react';
import { Menu, Affix } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, useModel } from 'umi'
import MenuConfig from './config';
import routes from '@/route';
const { SubMenu } = Menu;


class App extends React.Component {

    state = {
        current: window.location.pathname,
        submenu: [],
        openKeys: []
    };

    componentDidMount() {
      
   
    }
    loop = (path, arr = []) => {

        if(path.lastIndexOf('/') == 0){
    
            return arr;
        }
        let sub = path.substr(0, path.lastIndexOf('/'));

        arr.push(sub);

 
      
        return this.loop(sub, arr)
        
        
    }
    componentWillMount(){
        let pathname = window.location.pathname;

        /**
         * /container/admin/sub-page1/list
         * =>
         * ['/container/admin',  '/container/admin/sub-page1']
         */
        // debugger;
        let qsPath = pathname.replace(/(\/+)/g, '/');

        
        let refishMenu = this.loop(qsPath);
        this.setState({
            submenu: refishMenu,
            openKeys: refishMenu
        })
    }
    handleClick = e => {
 
        this.setState({
            current: e.key,

        });
    };
    handleClickTitle = e => {

        this.setState({

            submenu: e.key
        });
    };
    MenuData = (item) => {
        if (!item.name) return;

        if (item.routes && item.routes.length > 0) {
            return (
                <SubMenu  key={item.path} icon={<SettingOutlined />} title={item.name}>


                    {item.routes.map(this.MenuData)}

                </SubMenu>
            )
        }

        return (
            <Menu.Item key={item.path} icon={<MailOutlined />}>
                <Link to={item.path} > {item.name} </Link>
            </Menu.Item>
        )


    }
    onOpenChange = (path : string[]) => {
        const { openKeys} = this.state;

        
        if(openKeys.length < path.length){
            // add open
            // debugger;
            path = path.filter((item, index) => {
                if(index == path.length - 1)return true;
                // 同级 并且 相同
                let ret = item.split('/').slice(0, -1).toString() != path[path.length - 1].split('/').slice(0, -1).toString();
      
                return ret;
            });

           
        }
        this.setState({
            openKeys: path
        })
    }
    render() {
        const { current, submenu, openKeys } = this.state;

        return (
            <Affix offsetTop={12}>

            
            <Menu onOpenChange={this.onOpenChange} onClick={this.handleClick} defaultOpenKeys={submenu} openKeys={ openKeys } selectedKeys={[current]} {...MenuConfig}>

                {routes.reduce((ret, item) => {
                    if(item?.path?.trim() == '/container'){
                        ret = item.routes;
                    }
                    return ret;
                }, []).map(this.MenuData)}


            </Menu>
            </Affix>
        );
    }
}

export default App