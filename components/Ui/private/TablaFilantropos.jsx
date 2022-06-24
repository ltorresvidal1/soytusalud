import { Table ,TableBody , TableCell } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TablaFilantropos = ({data}) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="datos filantropos">
        <TableHead sx={{backgroundColor:"#0a0b0b" }}>
          <TableRow>
            <TableCell  sx={{color:"white"}}>Nombres</TableCell>
            <TableCell  sx={{color:"white"}}>Apellidos</TableCell>
            <TableCell  sx={{color:"white"}}>Identificacion</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.Filantropos.map((row) => (
            <TableRow
              key={row.identificacion}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {row.nombre}              </TableCell>
              <TableCell>{row.apellidos}</TableCell>
              <TableCell>{row.identificacion}</TableCell>
              <TableCell>fecha solicitud</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TablaFilantropos