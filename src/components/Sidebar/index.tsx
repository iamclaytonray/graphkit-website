import * as React from 'react';
import { Link } from 'gatsby';
import { FaTerminal, FaCode } from 'react-icons/fa';

import './sidebar.scss';

import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

export const Sidebar = () => {
  return (
    <Sider
      width={200}
      style={{
        background: '#fff',
        height: '100%',
        minHeight: '100vh',
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <FaTerminal className="anticon" />
              CLI
            </span>
          }
        >
          <Menu.Item key="1">Commands</Menu.Item>
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
