import React from 'react';
import PropTypes from 'prop-types';
import { InvisibleSpan } from '../utils/Invisible';
import { StaticQuery, graphql} from "gatsby";
import MenuItem from "./MenuItem";
import {Container, Grid ,Box, List} from '@material-ui/core';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';




class MainMenu extends React.PureComponent {
  render() {
    const MENU_QUERY = graphql`
      fragment MenuItem on  WpMenuItem {
          id
          label
          url
          title
          target
      }
      query GETMAINMENU {
      menu_en:
        wpMenu(slug: {glob: "mainmenu"}) {
            name
            slug
            menuItems {
              nodes {
                ...MenuItem
    
              }
            }
          },
        },
      `
    return (
   
      <StaticQuery
        query={MENU_QUERY}
        render={(data) => {
          if (data.menu_en.menuItems ) {
            const menuItems = data.menu_en.menuItems.nodes

            return (
        
            
              <List>
                { menuItems.map((menuItem, i) => (
                        <MenuItem key={i+ menuItem.id} menuItem={menuItem} 
                          style={{
                          listStyleType: `none`,
                          padding: `1rem`,
                        }} />
                    ))}
                    </List>      
             
            )
          }
          return null
        }}
      />      
    );
  }
};



export default MainMenu;