import React from 'react';
import{ Typography ,
 Grid,
 Box ,
 TextField ,
  IconButton ,
  Input ,
  FilledInput,
  OutlinedInput ,
  InputLabel ,
  InputAdornment,
  FormHelperText,
  FormControl ,
  Visibility ,
  VisibilityOff,
  Button,
  Checkbox,
  FormControlLabel,
  Container
}from '@material-ui/core/';

import FooterBox from  '../FooterBox';
import TownscapeLogo from '../../assets/svg/townscapeLogo.svg';
import GatewayLogo from '../../assets/svg/gateway.svg';
import { autoPlay } from 'react-swipeable-views-utils';
import scrollTo from 'gatsby-plugin-smoothscroll';
import KeyfactsItem from './KeyfactsItem';





const styles = {
  root: {
    margin:'0',
  },
  texttitle:{
    margin: '6rem 0',
    textAlign: 'center',
  },
  form:{
    maxWidth: '100%',
  },
  textField: {
    width: '100%',
  },
  formControlLabel:{
    marginTop:'1rem',
    color: '#DFA629',
    fontSize: '0.875rem'
  },
  padding: {
    padding: '0 5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    width: '50%',
    marginTop: '1rem',
  },
  img:{
    textAlign: 'left',
    margin: '0 auto',
    width: '15rem',
    display: 'inline-block',
  },
  img2:{
    textAlign: 'right',
    margin: '0rem 0 0 4rem',
    width: '10rem',
    display: 'inline-block',
  },
  text:{
    textAlign: 'center',
    margin: '0px auto',
    lineHeight: 1
  },
  space:{
    textAlign: 'center',
    margin: '3rem auto',
  },
} 


const Keyfacts = ({ keyfacts }) => {

  return (
     
        <KeyfactsItem keyfacts= {keyfacts}/>
  )

}

export default Keyfacts
