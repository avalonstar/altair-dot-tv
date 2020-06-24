import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, height: `100%` }}>
      <a href="https://twitter.com/altairdottv">
        <Image />
      </a>
    </div>
  </Layout>
)

export default IndexPage
