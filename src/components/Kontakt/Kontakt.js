import React, { Component } from 'react';
import {Link} from 'gatsby'
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
   Container,
   Paper
 }from '@material-ui/core/';
import PropTypes from 'prop-types';


import Styles from './Kontakt.module.scss'
import TownscapeLogo from '../../assets/svg/townscapeLogo.svg';
import GatewayLogo from '../../assets/svg/gateway.svg';






// Adds attributes to form input fields for Netlify
const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

class Kontakt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            textmask: '',
            message: ''
        };
    }
    // Handles submission for Netlify form
    handleSubmit = e => {
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...this.state })
           
        })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

        e.preventDefault();
    };

    // Handles state for input fields
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        const { classes } = this.props;
        const { name, email,tel,  message } = this.state;
        const text1 = this.props.text1
        const text2 = this.props.text2
        const textColor = this.props.textColor
        const texttitle = this.props.texttitle
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
                <Box  className={Styles.paper}>
                    <form
                        onSubmit={this.handleSubmit}
                        name="contact" 
                        netlify='true' 
                        netlify-honeypot="bot-field" 
                    >
                        <input type='hidden' name='form-name' value='contact' />
                  

                        <TextField
                            className={Styles.textField}
                            required
                            type='text'
                            name='name'
                            value={this.name}
                            margin='normal'
                            variant='standard'
                            label='Full Name'
                            onChange={this.handleChange}
                        />
                        <TextField
                            className={Styles.textField}
                            required
                            type='email'
                            name='email'
                            value={this.email}
                            margin='normal'
                            variant='standard'
                            label='Email'
                            onChange={this.handleChange}
                        />
                        <TextField
                            className={Styles.textField}
                            name='phone'
                            type='tel'
                            value={this.tel}
                            variant='standard'
                            label='Phone Number'
                            margin='normal'
                            onChange={this.handleChange}
                        />
                        <TextField
                            className={Styles.textField}
                            required
                            name='message'
                            type='text'
                            value={this.message}
                            margin='normal'
                            multiline
                            rows='5'
                            variant='filled'
                            label='Message'
                            helperText='* input is required'
                            onChange={this.handleChange}
                        />
                        <Button
                            size='medium'
                            type='submit'
                          
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
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
        );
    }
}

Kontakt.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Kontakt;