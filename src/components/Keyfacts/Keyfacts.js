import React from "react"
import { Container,makeStyles,Table,TableRow, TableHead, TableCell, Grid, TableFooter, TableContainer,TableBody,Typography } from '@material-ui/core'
import {Reveal,Fade} from 'react-reveal';

const Keyfacts = ({ keyfacts, keyfacts2  }) => {

return (
  <Container id={'Keyfacts'} >
  <Grid container>
  <Grid item xs={12}  style={{paddingTop:'3rem'}}  >
    <Typography  color='secondary' variant = 'h3' align='center'>Keyfacts</Typography>
  </Grid>
</Grid>
  <Grid container  spacing ={ 2}>
        <Grid item  xs={12} sm ={6} >
          <Table>
            <TableHead />
              <TableBody>
                {keyfacts.map((keyfact, i) => (
                  
                    <TableRow  key={i}>
                      <TableCell><Fade bottom><h4>{keyfact.title}</h4></Fade> </TableCell>
                      <TableCell><Fade bottom delay={300}><p>{keyfact.description}</p></Fade></TableCell>
                    </TableRow>
                 
                ))}
              </TableBody>
          </Table>
        </Grid> 
        <Grid item  xs={12} sm ={6} >
          <Table>
            <TableHead />
              <TableBody>
                {keyfacts2.map((keyfact2, i) => (
                    <TableRow  key={i}>
                      <TableCell><Fade bottom delay={500}><h4>{keyfact2.title}</h4></Fade></TableCell>
                      <TableCell><Fade bottom delay={800}><p>{keyfact2.description}</p></Fade></TableCell>
                    </TableRow>
                ))}
              </TableBody>
          </Table>
        </Grid> 
        </Grid>
        </Container>
  )
}

export default Keyfacts