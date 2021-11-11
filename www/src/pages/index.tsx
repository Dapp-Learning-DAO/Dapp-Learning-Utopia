import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Themes from "../components/themes"
import AboutUs from "../components/about-us"
import ThoughtsArchive from "../components/thoughts-archive"

const Index: React.FC<PageProps> = () => (
  <Layout>
    <Hero />
    <Themes />
    <AboutUs />
    <ThoughtsArchive />
  </Layout>
)

export default Index
