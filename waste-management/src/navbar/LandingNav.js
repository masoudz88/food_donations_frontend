import React from 'react'
import { Link } from "react-router-dom";
import {  Layout, Menu } from 'antd';
import { UserOutlined,ExportOutlined } from '@ant-design/icons';

const LandingNav = () => {
    
    const { Header } = Layout;
  
    return (
        <div>
            <Layout className="layout">
    <Header className="header">
      <div className="logo" />
      <Menu className="menuItems" mode="horizontal" defaultSelectedKeys={['2']}>          
        <Menu.Item key="1" icon={<UserOutlined />} title="Log In" ><Link to="Credential">Log In</Link></Menu.Item>        
        <Menu.Item key="2"  icon={<ExportOutlined />} title="Sign Up"><Link to="Signup">Sign Up</Link></Menu.Item>        
      </Menu>
    </Header>    
  </Layout>  
        </div>
    )
}

export default LandingNav;
