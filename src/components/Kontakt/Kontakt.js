import React from "react";
import {Link} from 'gatsby';
import{ Typography ,
  Grid,
  Box ,
  TextField ,
   IconButton ,
   FilledInput,
   OutlinedInput ,
   Visibility ,
   VisibilityOff,
   Button,
   Checkbox,
   Container,
 }from '@material-ui/core/';
import FooterBox from  '../FooterBox';
import TownscapeLogo from '../../assets/svg/townscapeLogo.svg';
import GatewayLogo from '../../assets/svg/gateway.svg';
import FooterImage from '../../assets/images/FootImage.png'
import Styles from './Kontakt.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}



class Kontakt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  render() {
    const text1 = this.props.text1
    const text2 = this.props.text2
    const texttitle = this.props.texttitle
    
    return (
      <Box className={ Styles.container} >
      <Container  id={'Kontakt'}>
  
    
      <Grid container >
        <Grid item xs={12}   className={ Styles.texttitle} >
          <Typography  color='secondary' variant = 'h3' >{texttitle}</Typography>
        </Grid>
      </Grid>
  
      <Grid container direction="row" justify="center" alignItems="flex-start" className ={Styles.root} >
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
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={
        (values, actions) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-demo", ...values })
          })
          .then(() => {
            alert('Success');
            actions.resetForm()
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false))
        }
      }
      validate={values => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const errors = {};
        if(!values.name) {
          errors.name = 'Name Required'
        }
        if(!values.email || !emailRegex.test(values.email)) {
          errors.email = 'Valid Email Required'
        }
        if(!values.message) {
          errors.message = 'Message Required'
        }
        return errors;
      }}
    >
    {() => (
      <Form name="contact-demo"  data-netlify={true}>
        <label htmlFor="name">Name: </label>
        <Field name="name"  placeholder="Name"/>
        <ErrorMessage name="name" />
  
        <label htmlFor="email">Email: </label>
        <Field name="email" />
        <ErrorMessage name="email" />
  
        <label htmlFor="message">Message: </label>
        <Field name="message" component="textarea"/>
        <ErrorMessage name="message" />
  
        <Button variant="outlined" type="submit" color='secondary' type="submit">Send</Button>
      </Form>
    )}
    </Formik>
    </Grid>
    </Grid>
    </Container>
    </Box>


  );
}
}
export default Kontakt