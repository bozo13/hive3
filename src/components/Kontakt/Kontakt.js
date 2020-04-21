import React, { useState } from 'react';
import {Container, 
  Grid,  
  TextField ,
  Button ,
  Dialog ,
  DialogActions ,
  DialogContent ,
  DialogContentText ,
  DialogTitle ,withStyles, FormControl } from '@material-ui/core';
import axios from 'axios';
import classes from './Kontakt.module.scss'
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
// import { DisplayFormikState } from './formikHelper';

const styles = {

};

const endpoints = {
  contact: "/.netlify/functions/sendEmail",
}


function Kontakt(props) {

  const [open, setOpen] = useState(false);
  const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);
  
  function handleClose() {
    setOpen(false);
  }

  function handleClickOpen() {
    setSubmitionCompleted(false);
    setOpen(true);
  }

  return (
    <Container>
    <Grid container>
    <Grid item xs={12} sm={6} > </Grid> 
    <Grid item xs ={12} sm={6} >
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Contact us!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {!isSubmitionCompleted &&
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Contact</DialogTitle>
            <DialogContent >
              <DialogContentText>
                Send us a comment!
              </DialogContentText>
              
              <Formik 
                initialValues={{ email: '', name: '', comment: '' }}
                onSubmit={(values, { setSubmitting }) => {
                   setSubmitting(true);
                  axios.post(endpoints.contact,
                    values,
                    {
                      headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/x-www-form-urlencoded' 
                      }
                    },
                  ).then((resp) => {
                    setSubmitionCompleted(true);
                  }
                  );
                }}

                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email()
                    .required('Required'),
                  name: Yup.string()
                    .required('Required'),
                  comment: Yup.string()
                    .required('Required'),
                })}
              >
                {(props) => {
                  const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                  } = props;
                  return (
                  
                    <form onSubmit={handleSubmit}   data-netlify={true}>
                      <TextField
                        label="name"
                        name="name"
                        className={classes.textField}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.name && touched.name) && errors.name}
                        margin="normal"
                        width={1}
                      />

                      <TextField
                        error={errors.email && touched.email}
                        label="email"
                        name="email"
                        className={classes.textField}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.email && touched.email) && errors.email}
                        margin="normal"
                        width={1}
                      />

                      <TextField
                        label="comment"
                        name="comment"
                        className={classes.textField}
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={(errors.comment && touched.comment) && errors.comment}
                        margin="normal"
                        width={1}
                      />
                      <DialogActions>
                        <Button
                          type="button"
                          className="outline"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}
                        >
                          Reset
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                          Submit
                        </Button>
                        {/* <DisplayFormikState {...props} /> */}
                      </DialogActions>
                    </form>
                  );
                }}
              </Formik>
            </DialogContent>
          </React.Fragment>
        }
        {isSubmitionCompleted &&
          <React.Fragment>
            <DialogTitle id="form-dialog-title">Thanks!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Thanks
              </DialogContentText>
              <DialogActions>
                <Button
                  type="button"
                  className="outline"
                  onClick={handleClose}
                >
                  Back to app
                  </Button>
                {/* <DisplayFormikState {...props} /> */}
              </DialogActions>
            </DialogContent>
          </React.Fragment>}
      </Dialog>
      </Grid>
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(Kontakt);