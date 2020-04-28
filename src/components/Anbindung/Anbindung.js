import React from "react"
import { Container,makeStyles,Box,Table,TableRow, TableHead, TableCell, Grid, TableFooter, TableContainer,TableBody, Typography } from '@material-ui/core'
import Styles from "./Anbindung.module.scss"
import AnbindungBg from '../../assets/svg/anbindung.svg'
import EntfernungenBg from '../../assets/svg/entfernungen.svg'
import Anbindungobjekt from '../../assets/svg/anbindungobject.svg'
import BerlinBgCounter from '../../assets/images/BerlinBgCounter.png'
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

  <Box className={Styles.Root}  >
  <Container>
  <Grid container  className={ Styles.container}>
  <Box component={Grid} className={Styles.bgCarousel} item  xs={2} display={{ xs: "none", sm: "block" }} />
  <Grid item xs={12} sm={4} alignself='center' justifyself = 'center' style={{position:'relative',}}>

  <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} 
  data-sal="slide-up"
  data-sal-delay="200"
  data-sal-duration='500'
  data-sal-easing="ease">
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
        <Paginations dots={2} index={index} onChangeIndex={this.handleChangeIndex}  />
        </Grid>     
        <Box component={Grid} className={Styles.Anbindungobjekt} item  xs={6} display={{ xs: "none", sm: "block" }} 
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration='500'
        data-sal-easing="ease"/>
        </Grid>
        </Container>
        </Box>  
  )
}
}

export default Anbindung