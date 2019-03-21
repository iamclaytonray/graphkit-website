import React from 'react';

import { Layout } from '../components/Layout';
import { Typography, Row, Col } from 'antd';
import { FaRocket } from 'react-icons/fa';

const features = [
  {
    title: 'Run On Your Infrastructure',
    description: `In an effort to keep things affordable for both of us, we don't offer a 'shared hosting' service.`,
  },
  {
    title: 'Run On Your Infrastructure',
    description: `In an effort to keep things affordable for both of us, we don't offer a 'shared hosting' service.`,
  },
  {
    title: 'Run On Your Infrastructure',
    description: `In an effort to keep things affordable for both of us, we don't offer a 'shared hosting' service.`,
  },
  {
    title: 'Run On Your Infrastructure',
    description: `In an effort to keep things affordable for both of us, we don't offer a 'shared hosting' service.`,
  },
];

const Feature = ({ title, description }: any) => (
  <div>
    <FaRocket />
    <Typography.Title style={{ fontSize: 18 }}>{title}</Typography.Title>
    <Typography.Text>{description}</Typography.Text>
  </div>
);

const AdminPage = () => (
  <Layout pageTitle="Admin">
    <Row>
      <h1 style={{ textAlign: 'center' }}>GraphKit Admin</h1>
      {features.map((feature, i: number) => (
        <Col key={i} span={8} style={{ textAlign: 'center', padding: 16 }}>
          <Feature title={feature.title} description={feature.description} />
        </Col>
      ))}
    </Row>
  </Layout>
);

export default AdminPage;
