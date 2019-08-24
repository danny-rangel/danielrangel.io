import React from "react"
import SEO from "../components/seo"
import ProjectListing from "../components/projectListing"
import Layout from "../components/layout"

const ProjectPage = () => (
  <>
    <SEO title="Projects" />
    <Layout>
      <ProjectListing />
    </Layout>
  </>
)

export default ProjectPage
