import * as React from 'react';

import { Layout } from 'antd';

import { Sidebar } from '../Sidebar';

export const DocsLayout = ({ children }) => (
  <React.Fragment>
    <Sidebar />
    <Layout style={{ marginLeft: 200 }}>
      <Layout.Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
          backgroundColor: 'rgba(22, 30, 38, 0.001%)',
          minHeight: '100vh',
        }}
      >
        {children}
      </Layout.Content>
    </Layout>
  </React.Fragment>
);
