import React from "react"
import { Container,makeStyles,Table,TableRow, TableHead, TableCell, Grid, TableFooter, TableContainer,TableBody,Typography } from '@material-ui/core'


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
                  
                    <TableRow  key={i} >
                      <TableCell><h4   data-sal="slide-up"
                      data-sal-delay="0"
                      data-sal-duration='500'
                      data-sal-easing="ease">{keyfact.title}</h4> </TableCell>
                      <TableCell><p   data-sal="slide-up"
                      data-sal-delay="200"
                      data-sal-duration='500'
                      data-sal-easing="ease">{keyfact.description}</p></TableCell>
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
                      <TableCell><h4
                      data-sal="slide-up"
                      data-sal-delay="0"
                      data-sal-duration='500'
                      data-sal-easing="ease">{keyfact2.title}</h4></TableCell>
                      <TableCell><p
                      data-sal="slide-up"
                      data-sal-delay="200"
                      data-sal-duration='500'
                      data-sal-easing="ease">{keyfact2.description}</p></TableCell>
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