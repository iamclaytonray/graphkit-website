import React from 'react';

import { Layout } from '../components/Layout';

const ScreenShot = require('../images/screenshot.jpg');

const ConsolePage = () => (
  <Layout pageTitle="Console">
    <div
      style={{
        padding: '2em',
        textAlign: 'center',
        backgroundColor: 'white',
        zIndex: 999999999,
      }}
    >
      <img
        src={ScreenShot}
        alt="Screenshot of GraphKit Console."
        style={{
          borderRadius: 4,
          width: 'auto',
          height: 600,
          boxShadow: '0 0 20px #aaa',
          marginTop: -120,
          zIndex: 999999999,
        }}
      />
    </div>
  </Layout>
);

export default ConsolePage;
