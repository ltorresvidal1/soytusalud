import { useState } from 'react';;
import { departamentos } from '../../utils/deparamentos';
import Link from 'next/link';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  TableContainer,
  FormControlLabel
} from '@mui/material';
import {  IOSSwitch } from './ServiciosTabla.css';
import { getInitials } from '../../utils/get-initials';

export const ServiciosTablas = ({ serviciosData, ...rest }) => {
  
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = serviciosData.map((service) => service.identificacion);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, identificacion) => {
    const selectedIndex = selectedCustomerIds.indexOf(identificacion);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, identificacion);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === serviciosData.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < serviciosData.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Nombre
                </TableCell>
                <TableCell>
                  Departamento
                </TableCell>
                <TableCell>
                  Municipio
                </TableCell>
                <TableCell>
                  Direccion
                </TableCell>
                <TableCell>
                  Servicios Principales
                </TableCell>
                <TableCell>
                  Detalle
                </TableCell>
                <TableCell>
                  Habilitado
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {serviciosData.slice(0, limit).map((service , index) => (
                <TableRow
                  hover
                  key={index}
                  selected={selectedCustomerIds.indexOf(service.identificacion) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(service.identificacion) !== -1}
                      onChange={(event) => handleSelectOne(event, service.identificacion)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={service.foto}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(service.nombre)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {service.nombreCompleto}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {departamentos.filter((dpto)=> dpto.codigo===service.departamento)[0].nombre}
                  </TableCell>
                  <TableCell>
                    {service.municipio}
                  </TableCell>
                  <TableCell>
                    {service.direccion}
                  </TableCell>
                  <TableCell>
                    {service.servicios.map((servicio) => (servicio.tipoServicio + ', '))}
                  </TableCell>
                  <TableCell>
                    <Link href={`/private/admin/servicios/detalleServicio/${service.identificacion}`}>
                      <a className='text-blue-500'>Detalles</a>
                    </Link>
                  </TableCell>
                  <TableCell>
                  <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} defaultChecked={service.habilitado} />}
                  />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      <TablePagination
        component="div"
        count={serviciosData.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

// ServiciosTablas.propTypes = {
//   serviciosData: PropTypes.array.isRequired
// };