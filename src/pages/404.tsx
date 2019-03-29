import * as React from 'react';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const NotFoundPage = () => (
  <Layout pageTitle="Not Found">
    <SEO title="Not Found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... oh the sadness.</p>
  </Layout>
);

export default NotFoundPage;
