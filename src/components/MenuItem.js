import React from "react"
import { getUrlPath } from "../utils/get-url-path"
import {Link} from "gatsby"
import { Button } from "@material-ui/core"
//import { Button } from "@chakra-ui/core"
import scrollTo from 'gatsby-plugin-smoothscroll';
import Styles from './Menuitem.module.scss'


const MenuItem = ({ menuItem, i }) => {
  return (
    <Button color='inherit' key={i + menuItem.url}   
      onClick={() => scrollTo(menuItem.url)}
      className={Styles.Button} 
    >
       
            {menuItem.label}
       
    </Button>
  )
}

export default MenuItem



/*
    <Link style={{
            display: `block`,
            color: `inherit`,
            textDecoration: 'none', 
            
            }} to={getUrlPath(menuItem.url)}>
            {menuItem.label}
      </Link>
*/