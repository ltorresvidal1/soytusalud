import { Table ,TableBody , TableCell } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TablaPacientes = ({data}) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="datos pacientes">
        <TableHead sx={{backgroundColor:"#0a0b0b" }}>
          <TableRow>
            <TableCell  sx={{color:"white"}}>Nombres</TableCell>
            <TableCell  sx={{color:"white"}}>Apellidos</TableCell>
            <TableCell  sx={{color:"white"}}>CC</TableCell>
            <TableCell  sx={{color:"white"}}>Grupo Poblacional</TableCell>
            <TableCell  sx={{color:"white"}}>Fecha Solicitud</TableCell>
            <TableCell  sx={{color:"white"}}>Comunidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.UsuariosTabla.map((row) => (
            <TableRow
              key={row.identificacion}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell>{row.apellidos}</TableCell>
              <TableCell>{row.identificacion}</TableCell>
              <TableCell>{row.grupoPoblacional}</TableCell>
              <TableCell>fecha solicitud</TableCell>
              <TableCell>{row.comunidad?row.comunidad:"No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TablaPacientes