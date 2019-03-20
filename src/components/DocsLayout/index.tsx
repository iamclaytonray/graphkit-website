import * as React from 'react';

import { Layout } from 'antd';

import { Sidebar } from '../Sidebar';

export const DocsLayout = ({ children }) => (
  <React.Fragment>
    <Layout>
      <Sidebar />
    </Layout>
    <Layout>
      <Layout.Content
        style={{ paddingLeft: 256, top: 0, position: 'absolute' }}
      >
        {children}
      </Layout.Content>
    </Layout>
  </React.Fragment>
);
