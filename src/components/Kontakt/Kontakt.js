import React from 'react';
import {Link} from 'gatsby';
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

import FooterImage from '../../assets/images/FootImage.png'
import Styles from './Kontakt.module.scss'





 

const Kontakt = ({text1, text2, textColor, texttitle}) => {

  return (
    <Box className={ Styles.container} >
    <Container  id={'Kontakt'}>

  
    <Grid container >
      <Grid item xs={12}   className={ Styles.texttitle} >
        <Typography  color='secondary' variant = 'h3' >{texttitle}</Typography>
      </Grid>
    </Grid>

    <Grid container
              direction="row"
              justify="center"
              alignItems="flex-start"
              
    className ={Styles.root} >

    <Grid item xs={12} sm={6}  className={Styles.text}>
      <Box>
        <img src={TownscapeLogo} className={Styles.img}/>
        <img src={GatewayLogo} className={Styles.img2}/>
      </Box>
      <Box  className={Styles.space}/>
      <div dangerouslySetInnerHTML={{__html: text2}}></div>
      <Box className ={Styles.xs_none} >
        <Link to='/impressum/ ' className={Styles.link}> >  Impressum</Link>
        <Link to='/datenschutz/' className={Styles.link2}> > Datenschutzerklärung</Link>
      </Box>
      <Box
      component={Grid} item xs={12} display={{ xs: "block", sm: "none" }}
      className={Styles.space3}
      />
    </Grid>

    <Grid item xs={12} sm={6} className={Styles.padding} >
    <FormControl fullWidth /* onSubmit={handleSubmit} */ className={Styles.form}>
    <TextField width={1}
      label="NAME"
      name="name"
      required= 'true'
      className={Styles.textField}
      /*
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={(errors.name && touched.name) && errors.name}
      margin="normal"
      */
    />

    <TextField
      label="E-MAIL"
      name="email"
      color='secondary'
      className={Styles.textField}
      /*
      value={values.email}
      error={errors.email && touched.email}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={(errors.email && touched.email) && errors.email}
      margin="normal"
      */
    />

    <TextField
      label="Telefon"
      name="telefon"
      color='secondary'
      className={Styles.textField}
      /*
      value={values.email}
      error={errors.email && touched.email}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={(errors.email && touched.email) && errors.email}
      margin="normal"
      */
    />
    <TextField
      label="NACHRICHT"
      name="nachricht"
      color='secondary'
      multiline = { true }
      rows={10}
      rowsMax={24}
      /*
      value={values.comment}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={(errors.comment && touched.comment) && errors.comment}
      margin="normal"
      */
    />
    {/*
      <Button
        type="button"
        className="outline"
  
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
     
      >
        Reset
      </Button>
    */}

    <FormControlLabel
      className={Styles.formControlLabel}
      required= 'true'
      value="end"
      control={<Checkbox  />}
      label="Ich habe die Datenschutzbestimmungen gelesen und akzeptiert."
      labelPlacement="Ich habe die Datenschutzbestimmungen gelesen und akzeptiert."
      color='secondary'
    />


      <Button variant="outlined" type="submit" className={Styles.button} color='secondary'/* disabled={isSubmitting} */>
        Senden
      </Button>
      {/* <DisplayFormikState {...props} /> */}
    
  </FormControl>
 
    </Grid>
     
    <Box
    component={Grid}
    item
    xs={12}
    display={{ xs: "block", sm: "none" }}
    >
      <Link to='/impressum/ ' className={Styles.link}> >  Impressum</Link>
      <Link to='/datenschutz/' className={Styles.link2}> > Datenschutzerklärung</Link>
    </Box>

    </Grid>
 
    <Box className={ Styles.space2} />
    </Container>
    </Box>
  )
}

export default Kontakt
