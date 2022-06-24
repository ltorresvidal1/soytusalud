import { useState } from 'react';
import PropTypes from 'prop-types';
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
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const PacientesTablas = ({ UsuariosTabla, customers, ...rest }) => {
  
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = UsuariosTabla.map((customer) => customer.identificacion);
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
                    checked={selectedCustomerIds.length === UsuariosTabla.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < UsuariosTabla.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Nombres
                </TableCell>
                <TableCell>
                  Apellidos
                </TableCell>
                <TableCell>
                  Comunidad
                </TableCell>
                <TableCell>
                  Documento
                </TableCell>
                <TableCell>
                  Tipo de Documento
                </TableCell>
                <TableCell>
                  Correo Electronico
                </TableCell>
                <TableCell>
                  Formulario Tu Historia
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {UsuariosTabla.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.identificacion}
                  selected={selectedCustomerIds.indexOf(customer.identificacion) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.identificacion) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.identificacion)}
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
                        src={customer.foto}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(customer.nombre)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.nombre}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.apellidos}
                  </TableCell>
                  <TableCell>
                    {customer.comunidad?customer.comunidad:'N/A'}
                  </TableCell>
                  <TableCell>
                    {customer.identificacion}
                  </TableCell>
                  <TableCell>
                    {customer.tipoDocumento}
                  </TableCell>
                  <TableCell>
                    {customer.correo}
                  </TableCell>
                  <TableCell>
                    {customer.formularioTuHistoria?"SI":"NO"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      <TablePagination
        component="div"
        count={UsuariosTabla.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

PacientesTablas.propTypes = {
  UsuariosTabla: PropTypes.array.isRequired
};