import React from "react"
import { Container,makeStyles,Table,TableRow, TableHead, TableCell, Grid, TableFooter, TableContainer,TableBody } from '@material-ui/core'


const KeyfactsItem = ({ keyfacts }) => {

return (
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
     

  )
}

export default KeyfactsItem