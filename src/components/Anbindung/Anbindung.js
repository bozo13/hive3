import React from "react"
import { Container,makeStyles,Box,Table,TableRow, TableHead, TableCell, Grid, TableFooter, TableContainer,TableBody, Typography } from '@material-ui/core'
import Styles from "./Anbindung.module.scss"
import AnbindungBg from '../../assets/svg/anbindung.svg'
import EntfernungenBg from '../../assets/svg/entfernungen.svg'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Paginations from './Pagination';

const styles1 = {
  slide: {
    padding: 15,
    color: '#fff',
  },
  slide1: {
    background: 'transparent',
  },
  slide2: {
    background: '',
  },
};


class Anbindung extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };


  render() {
    const { index } = this.state;
    const anbindungen  = this.props.anbindungen
    const title1 = this.props.title1
    const title2 = this.props.title2
    const entfernungen = this.props.entfernungen
  console.log(Styles)

  

  return (
  <Container>
  <Box
  component={Grid}
  style={Styles.bgCarousel}
  item
  xs={1}
  display={{ xs: "none", sm: "block" }}
></Box>
  <Grid item xs={12} sm={3} alignself='center' justifyself = 'center'>

  <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} >
      <Box style={Object.assign({}, styles1.slide, styles1.slide1)} >
        <div className={Styles.AnbindungBg}>
        <h4 className={Styles.topTtile1}>{title1}</h4> 
          <table className={Styles.table}>
          <tbody>
                {anbindungen.map((anbindung, i) => (
                    <tr  key={i}>
                      <td><p className={Styles.anbindungTitle1}>{anbindung.title}</p></td>
                      <td></td>
                      <td><p className={Styles.anbindungP1}>{anbindung.description}</p></td>
                    </tr>
                ))}
           </tbody>
          </table>
        </div> 
        </Box>
        <Box style={Object.assign({}, styles1.slide, styles1.slide2)} >
          <div className={Styles.EntfernungenBg}>
          <h4 className={Styles.topTtile2}>{title2}</h4> 
            <table className={Styles.table}>
            <tbody>
                  {entfernungen.map((entfernung, i) => (
                      <tr  key={i}>
                        <td><p  className={Styles.anbindungTitle2}>{entfernung.title}</p></td>
                        <td></td>
                        <td><p  className={Styles.anbindungP2}>{entfernung.description}</p></td>
                      </tr>
                  ))}
                  </tbody>
            </table>
          </div> 
          </Box>
        
        </SwipeableViews>
        <Paginations dots={2} index={index} onChangeIndex={this.handleChangeIndex}  className={Styles.Paginations} />
       
        </Grid>     
        </Container>
  )
}
}

export default Anbindung