import React from "react"
import { Container,makeStyles,Box,Table,TableRow, TableHead, TableCell, Grid, TableFooter, TableContainer,TableBody, Typography } from '@material-ui/core'
import styles from "./Anbindung.module.scss"
import AnbindungBg from '../../assets/svg/anbindung.svg'
import EntfernungenBg from '../../assets/svg/entfernungen.svg'
import SwipeableViews from 'react-swipeable-views';


const Anbindung = ({   anbindungen, title1, title2, entfernungen, index  }) => {
  console.log(styles)

 
  return (
  <Container>
<Grid container  spacing ={2} justify='center' alignItems='center'>
 
        <Box className={styles.AnbindungBg}>
        <h4 className={styles.topTtile1}>{title1}</h4> 
          <table className={styles.table}>
      
                {anbindungen.map((anbindung, i) => (
                    <tr  key={i}>
                      <td><p className={styles.anbindungTitle1}>{anbindung.title}</p></td>
                      <td></td>
                      <td><p className={styles.anbindungP1}>{anbindung.description}</p></td>
                    </tr>
                ))}

          </table>
        </Box> 
        
        <Box className={styles.EntfernungenBg}>
        <h4 className={styles.topTtile2}>{title2}</h4> 
          <table className={styles.table}>

                {entfernungen.map((entfernung, i) => (
                    <tr  key={i}>
                      <td><p  className={styles.anbindungTitle2}>{entfernung.title}</p></td>
                      <td></td>
                      <td><p  className={styles.anbindungP2}>{entfernung.description}</p></td>
                    </tr>
                ))}

          </table>
        </Box> 

        </Grid>
        </Container>
  )
}

export default Anbindung