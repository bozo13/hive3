import React from "react"
import { makeStyles,Table,TableRow, TableHead, TableCell, Grid, TableFooter, TableContainer,TableBody } from '@material-ui/core'


const Keyfacts = ({ keyfacts }) => {
/*
  const useStyle = makeStyles( theme =>({
    root:{
      flexGrow :1,
    },
    paper:{
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#999',
    }

  })
)
*/
return (

    < >
  
      <Grid item  container xs={12}  sm={6} spacer={0} style={{ alignSelf:'flex-start', padding: '0 1rem'}} id={'Keyfacts'}>
        <TableContainer>
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
          </TableContainer> 
     
        </Grid>  
      </>

  )
}

export default Keyfacts
