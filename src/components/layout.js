import React, { Fragment } from "react"
import Header from "./Header"
import {Container, Grid} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import HeadingTitle from  './HeadTitle';
import FooterBox from  './FooterBox';






//import theme from '../utils/Theme'
 
//import "../assets/style.css"



const Layout = ({ children }) => (

  <ThemeProvider theme={theme}>
  <HeadingTitle/> 
  <Container>
      <CssBaseline />
          <Header/> 
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{
                marginTop:'75px'
              }}
            >
              {children}
 
          </Grid>
      </Container> 
      <FooterBox/>
    </ThemeProvider>

  )

export default Layout
