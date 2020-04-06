import React from "react"
import { Container,makeStyles,Table,TableRow, TableHead, TableCell, Grid, TableFooter, TableContainer,TableBody } from '@material-ui/core'


const KeyfactsItem = ({ keyfacts, keyfacts2  }) => {

return (
  <Container>
        <Grid item  xs={12} sm ={6} >
          <Table>
            <TableHead />
              <TableBody>
                {keyfacts.map((keyfact, i) => (
                    <TableRow  key={i}>
                      <TableCell><h4>{keyfact.title}</h4></TableCell>
                      <TableCell><p>{keyfact.description}</p></TableCell>
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
                      <TableCell><h4>{keyfact2.title}</h4></TableCell>
                      <TableCell><p>{keyfact2.description}</p></TableCell>
                    </TableRow>
                ))}
              </TableBody>
          </Table>
        </Grid> 
     
        </Container>
  )
}

export default KeyfactsItem