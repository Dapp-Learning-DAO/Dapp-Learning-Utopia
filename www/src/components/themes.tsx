/** @jsx jsx */
import { jsx, useColorMode, Themed } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import Curved from "../icons/curved"
import Listing from "./listing"
import type { nodeType } from "./listing"

const bigHeadingStyle = {
  fontSize: [`72px`, `96px`, `144px`],
  fontFamily: `heading`,
  fontWeight: `heading`,
  lineHeight: `heading`,
  letterSpacing: `wide`,
  my: 0,
  textAlign: `center`,
  position: `relative`,
  bottom: [`2vw`, `3vw`, `3vw`, `4vw`],
}

type ThemesDataType = {
  allThemes: {
    nodes: nodeType[];
  };
};

const Themes = () => {
  const [mode] = useColorMode()

  const {
    allThemes: { nodes: themes },
  } = useStaticQuery<ThemesDataType>(
    ListQuery
  );

  const isStrange = mode === `strangerThings`

  return (
    <div>
      <section data-name="Tutorial">
        <div sx={{ position: `relative` }}>
          <h2
            sx={{
              ...bigHeadingStyle,
              transform: isStrange ? `matrix(1, 0, 0, -1, 0, 0)` : `none`,
              color: isStrange ? `#000114` : `light`,
            }}
          >
            Products
          </h2>
          <Curved sx={{ position: `absolute`, bottom: `-1px`, left: 0, right: 0 }} />
        </div>
        <div sx={{ backgroundColor: `backgroundThemes` }}>
          <Listing list={themes.filter(item => /(Dapp-Learning)|(Encryption courses Translation)|(WaterMargin)|(Sharing Meetups)/.test(item.title))} />
        </div>
        <Curved sx={{ transform: `matrix(1, 0, 0, -1, 0, 0)`, position: `relative`, top: `-1px` }} />
      </section>
      {/* <section data-name="Products">
        <div sx={{ position: `relative`, backgroundColor: `backgroundThemes` }}>
          <h2
            sx={{
              ...bigHeadingStyle,
              transform: isStrange ? `matrix(1, 0, 0, -1, 0, 0)` : `none`,
              color: isStrange ? `#000114` : `light`,
            }}
          >
            Products
          </h2>
          <Curved sx={{ position: `absolute`, bottom: `-1px`, left: 0, right: 0 }} />
        </div>
        <div sx={{ backgroundColor: `backgroundThemes` }}>
          <Listing list={themes.filter(item => /(WaterMargin)/.test(item.title))} />
        </div>
        <Curved sx={{ transform: `matrix(1, 0, 0, -1, 0, 0)`, position: `relative`, top: `-1px` }} />
      </section> */}
      <p sx={{ mt: 6, fontSize: [1, 2, 2, 3], textAlign: `center` }}>
        <span sx={{ fontWeight: `bold` }}>More products are coming soon ...</span>{" "}
        {/* <br /> In the meantime you can have a look at our already existing{` `}
        <Themed.a href="">
          open Github
        </Themed.a>
        ! */}
      </p>
    </div>
  )
}

export default Themes


const ListQuery = graphql`
  query {
    allThemes {
      nodes {
        title
        category
        url
        preview
        description
        shapes {
          color
          type
          size
          xOffset
          yOffset
          opacity
        }
        image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 900
              quality: 90
              aspectRatio: 1.7
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;