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

import FooterImage from '../../assets/images/FootImage.png'






const styles = {
  root: {
    margin:'0',
  },
  container: {
    width:'100%',
    minHeight:'100%',
    backgroundImage: `url(${FooterImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
},
  texttitle:{
    margin: '0 0 3rem 0',
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
  space2:{
    textAlign: 'center',
    margin: '10rem auto',
  },
} 


const Kontakt = ({text1, text2, textColor, texttitle}) => {

  return (
    <Box style={ styles.container} id={'Kontakt'} >
    <Container >

  
    <Grid container>
      <Grid item xs={12}   style={ styles.texttitle} >
        <Typography  color='secondary' variant = 'h3' >{texttitle}</Typography>
      </Grid>
    </Grid>

    <Grid container
              direction="row"
              justify="center"
              alignItems="flex-start"
              
    style ={styles.root} >

    <Grid item xs={12} sm={6}  style={styles.text}>
      <Box>
        <img src={TownscapeLogo} style={styles.img}/>
        <img src={GatewayLogo} style={styles.img2}/>
      </Box>
      <Box  style={styles.space}/>
      <div dangerouslySetInnerHTML={{__html: text2}}></div>
    </Grid>

    <Grid item xs={12} sm={6} style={styles.padding} >
    <FormControl fullWidth /* onSubmit={handleSubmit} */ style={styles.form}>
    <TextField width={1}
      label="NAME"
      name="name"

      className={styles.textField}
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
      className={styles.textField}
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
      className={styles.textField}
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
      style={styles.formControlLabel}
      value="end"
      control={<Checkbox  />}
      label="Ich habe die Datenschutzbestimmungen gelesen und akzeptiert."
      labelPlacement="Ich habe die Datenschutzbestimmungen gelesen und akzeptiert."
      color='secondary'
    />

  
      <Button variant="outlined" type="submit" sizeLarge style={styles.button} color='secondary'/* disabled={isSubmitting} */>
        Senden
      </Button>
      {/* <DisplayFormikState {...props} /> */}
    
  </FormControl>
  
    </Grid>

    </Grid>
    <Box style={ styles.space2} />
    </Container>
    </Box>
  )
}

export default Kontakt
