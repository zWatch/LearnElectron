import React from 'react';
import { RouteType } from '../../routes';
import { Nav, container } from './styles';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

interface TopNavProps{
  Routes: RouteType[]
};

function TopNav(props:TopNavProps){
  return (
    <Layout className="layout">

    <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {
            props.Routes.map((route, index) => {
              const key = index + 1;
              return <Menu.Item key={key} >
                  <Link to={route.path}>{route.name}</Link>
                </Menu.Item>;
            })
            }
        </Menu>
    </Header>

    <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
    </Content>

    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  
  );
}
export default TopNav;