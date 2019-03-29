import * as React from 'react';

import { Layout } from '../components/Layout';
import { Typography, Row, Col, Card } from 'antd';
import { FaRocket } from 'react-icons/fa';
import { SEO } from '../components/SEO';

const features = [
  {
    title: 'Run On Your Infrastructure',
    description: `In an effort to keep things affordable for both of us, we don't offer a 'shared hosting' service.`,
  },
  {
    title: 'Agnostic',
    description: `GraphQL itself is agnostic to language, framework, and persistence layer. So are we.`,
  },
  {
    title: 'Precise Authorization',
    description: `Other services cater to devs. What about your content team? Assign IAM roles to users, giving them the correct access they need. Devs enjoy a no-frills UI and content creators enjoy a non-lethal UI.`,
  },
];

const Feature = ({ title, description }: any) => (
  <Card style={{ height: 300 }}>
    <FaRocket />
    <Typography.Title style={{ fontSize: 18 }}>{title}</Typography.Title>
    <Typography.Text>{description}</Typography.Text>
  </Card>
);

const AdminPage = () => (
  <Layout pageTitle="Admin">
    <SEO title="Admin" />
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
