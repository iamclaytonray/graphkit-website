import React from "react"

import { Layout } from "../components/Layout"
import { Card, Typography } from "antd"

const features = [
  {
    title: "Run On Your Infrastructure",
    description: `In an effort to keep things affordable for both of us, we don't offer a 'shared hosting' service.`,
  },
]

const Feature = ({ title, description }: any) => (
  <Card>
    <Typography>{title}</Typography>
    <Typography>{description}</Typography>
  </Card>
)

const AdminPage = () => (
  <Layout pageTitle="Admin">
    <section>
      <h1 style={{ textAlign: "center" }}>GraphKit Admin</h1>
      <Typography>Manage your GraphQL data your way.</Typography>
      {features.map((feature, i: number) => (
        <Feature
          key={i}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  </Layout>
)

export default AdminPage
