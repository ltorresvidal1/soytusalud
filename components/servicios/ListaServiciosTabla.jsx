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
import { ActualizarEstadoServicio } from '../../graphql/servicios/mutations';
import { useMutation } from '@apollo/client/react';
import { getInitials } from '../../utils/get-initials';

export const ListaServiciosTabla = ({ ListaServicios, ...rest }) => {
  
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [ actualizarEstadoServicio, { loading } ] = useMutation(ActualizarEstadoServicio);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = ListaServicios.map((service) => service.identificacion);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleState=(e,identificacion) => {
    // actualizarEstadoServicio({
    //   variables: {habilitado:e.target.checked,identificacion}
    // })
  }

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
    <Card {...rest} className="mt-5">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                Nombre completo del servicio
                </TableCell>
                <TableCell>
                  Categoria
                </TableCell>
                <TableCell>
                  Dias disponibles
                </TableCell>
                <TableCell>
                  Horario de atención
                </TableCell>
                <TableCell>
                  Direccion
                </TableCell>
                <TableCell>
                prestador del servicio
                </TableCell>
                <TableCell>
                  Celular
                </TableCell>
                <TableCell>
                  whatsapp
                </TableCell>
                <TableCell>
                  Valor
                </TableCell>
                <TableCell>
                  modalidad
                </TableCell>
                <TableCell>
                  Habilitado
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ListaServicios.slice(0, limit).map((service , index) => (
                <TableRow
                  hover
                  key={index}
                  selected={selectedCustomerIds.indexOf(service.identificacion) !== -1}
                >
                  <TableCell>
                    {service.especialidad}
                  </TableCell>
                  <TableCell>
                    {service.tipoServicio}
                  </TableCell>
                  <TableCell>
                    {/* {departamentos.filter((dpto)=> dpto.codigo===service.departamento)[0].nombre} */}
                    {service.dias.map((dia , index)=>(
                        <span className='font-medium' key={index}>{dia.slice(0,3).toUpperCase()}-</span>
                    ))}
                  </TableCell>
                  <TableCell>
                    {service.horaInicio} - {service.horaFin}
                  </TableCell>
                  <TableCell>
                    {service.direccionServicio}
                  </TableCell>
                  <TableCell>
                    {service.nombreResponsable}
                  </TableCell>
                  <TableCell>
                    {service.celularServicio}
                  </TableCell>
                  <TableCell>
                    {service.whatsAppServicio}
                  </TableCell>
                  <TableCell>
                    {service.valorServicio}
                  </TableCell>
                  <TableCell>
                    {service.modalidad}
                  </TableCell>
                  <TableCell>
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} onChange={ (e)=>handleState( e, service.identificacion ) } defaultChecked={service.habilitado} />}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      <TablePagination
        component="div"
        count={ListaServicios.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};