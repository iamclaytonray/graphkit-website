import * as React from 'react';
import { Layout, Menu, Avatar, Typography } from 'antd';
import { FaTerminal, FaCode } from 'react-icons/fa';

import './sidebar.scss';
import { Link } from 'gatsby';

const { SubMenu } = Menu;
const { Sider } = Layout;

export const Sidebar = () => {
  return (
    <Sider
      width={200}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        boxShadow: '0 0 10px #eee',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderBottom: '1px solid #eee',
        }}
      >
        <Avatar
          src="https://avatars3.githubusercontent.com/u/45945075?s=200&v=4"
          alt=""
          className="logo"
        />
        <Typography style={{ margin: '0 10px' }}>Back to website</Typography>
      </Link>
      <Menu
        mode="inline"
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['0']}
        style={{ height: '100%', borderRight: 0, marginTop: -1 }}
      >
        <Menu.Item key="0">
          <Link to="/docs/general">GraphKit</Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <FaTerminal className="anticon" />
              CLI
            </span>
          }
        >
          <Menu.Item key="1">
            <Link to="/docs/cli/commands">Commands</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <FaCode className="anticon" />
              Codegen
            </span>
          }
        >
          <Menu.Item key="5">Introduction</Menu.Item>
          <Menu.Item key="6">Getting Started</Menu.Item>
          <Menu.Item key="7">Plugins</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
