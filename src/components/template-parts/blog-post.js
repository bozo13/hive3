import React from "react"

import { Link } from "gatsby"
import urlToPath from "gatsby-source-wordpress-experimental/utils/url-to-path"
import Img from "gatsby-image"
import {Box, Container} from '@material-ui/core'
import Layout from "../../components/layout"
import AllLayouts from "../../components/AllLayouts"
import Footer from "../../components/Footer"
import Style from "./style.scss"
import FooterImage from '../../assets/images/FootImage.png'



const styles = {
  root: {
    marginTop:'75px',
  },
  container: {
    width:'100%',
    minHeight:'100%',
    backgroundImage: `url(${FooterImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
},
 
  space2:{
    textAlign: 'center',
    margin: '10rem auto',
  },
} 


function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage, pageBuilder } = page

  

  return (
    <Layout >
    
      {!!pageBuilder&&
        pageBuilder.layouts&&
         pageBuilder.layouts.map((layout, index) => {
          console.log(layout)
          return <AllLayouts key={index} layoutData={layout} />
         
        })
      }

      {!!featuredImage &&
        featuredImage.remoteFile &&
        featuredImage.remoteFile.childImageSharp && (
          <Box mb={5}>
            <Img fluid={featuredImage.remoteFile.childImageSharp.fluid} />
          </Box>
        )}
      
        {!!pageBuilder&&
          pageBuilder.footers&& 
          pageBuilder.footers.footer && (
            <Footer data={pageBuilder.footers.footer.email} />
          )
        }

    <Container>
      <Box style={Style} className={content} dangerouslySetInnerHTML={{ __html: content }}/>
    </Container>

    <Box style={{ display:'none' }} >
      <br />
      {!!nextPage && (
        <Link to={urlToPath(nextPage.link)}>Next: {nextPage.title}</Link>
      )}
      <br />
      {!!previousPage && (
        <Link to={urlToPath(previousPage.link)}>
          Previous: {previousPage.title}
        </Link>
      )}
      </Box>


      
    </Layout>
  )
}

export default BlogPost
