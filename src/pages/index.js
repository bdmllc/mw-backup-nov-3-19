import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import FeaturedDiscoveries from "../components/Home/FeaturedDiscoveries"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      description="Miami Walking Tours On Foot and Public Transportation."
    />
    <StyledHero home="true" img={data.brickellBayHero.childImageSharp.fluid}>
      <Banner
        title="explore miami"
        info="See Miami through a pedestrian's point of view"
      >
        <AniLink fade to="/tours" className="btn-white">
          explore more
        </AniLink>
      </Banner>
    </StyledHero>
    <FeaturedDiscoveries />
  </Layout>
)

export const query = graphql`
  query {
    brickellBayHero: file(relativePath: { eq: "brickellBayHero.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
