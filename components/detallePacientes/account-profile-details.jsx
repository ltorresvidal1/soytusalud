import { useState } from 'react';
import { grupoPoblacional } from '../../utils/grupoPoblacional';
import { departamentos } from '../../utils/deparamentos';
import { eps } from '../../utils/eps';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography
} from '@mui/material';


export const AccountProfileDetails = ({user}) => {

  return (
    <form
      autoComplete="off"
      noValidate
    >
      <Card>
        <CardHeader
          subheader={`${user.tipoDocumento} ${user.identificacion}`}
          title={`${user.nombre} ${user.apellidos}`}
          avatar={
            <Avatar
            src={user.foto}
            sx={{
              height: 80,
              mb: 2,
              width: 80
            }}
          />

          }
        >
        <Box>

        </Box>

        </CardHeader>
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                variant="outlined"
                fontWeight={"bold"}
              >
               Fecha Solicitud de Servicio :
              </Typography>
              <Grid>
                <Typography
                  variant="outlined"
                >
                  {user.fechaSolicitud}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
                Correo Electronico :
              </Typography>
              <Grid
              >
              <Typography
                
                variant="outlined"
              >
                {user.correo}
              </Typography>
              </Grid>

            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
                Celular :
              </Typography>
              <Grid
              >
              <Typography
                
                variant="outlined"
              >
                {user.celular}
              </Typography>
              </Grid>

            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
                Departamento:
              </Typography>
              <Grid>
                <Typography
                  
                  variant="outlined"
                >
                  {departamentos.filter((dpto)=> dpto.codigo===user.departamento)[0].nombre}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
                Municipio:
              </Typography>
              <Grid>
                <Typography
                  
                  variant="outlined"
                >
                  {user.municipio}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
            <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
                Direccion:
              </Typography>
              <Grid>
                <Typography
                  
                  variant="outlined"
                >
                  {user.direccion}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
                Genero:
              </Typography>
              <Grid>
                <Typography
                  
                  variant="outlined"
                >
                  {user.genero}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
               Identidad de genero :
              </Typography>
              <Grid>
                <Typography
                  
                  variant="outlined"
                >
                  {user.identidadGenero}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
               Orientacion sexual :
              </Typography>
              <Grid>
                <Typography
                  
                  variant="outlined"
                >
                  {user.orientacionSexual}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
               Grupo Poblacional :
              </Typography>
              <Grid>
                <Typography
                  
                  variant="outlined"
                >
                  {grupoPoblacional
                  .filter((valueFilter)=> valueFilter.value === user.grupoPoblacional)[0].grupo}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
               Comunidad :
              </Typography>
              <Grid>
                <Typography
                  
                  variant="outlined"
                >
                  {user.comunidad?user.comunidad:'N/A'}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                variant="outlined"
                fontWeight={"bold"}
              >
               SISBEN :
              </Typography>
              <Grid>
                <Typography
                  variant="outlined"
                >
                  <a className='text-blue-500' target="_blank" href={user.sisben} rel="noreferrer">Ver SISBEN</a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                variant="outlined"
                fontWeight={"bold"}
              >
               Historia Clinica :
              </Typography>
              <Grid>
                <Typography
                  variant="outlined"
                >
                  <a className='text-blue-500'  target="_blank" href={user.historiaClinica} rel="noreferrer">Ver historia clinica</a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                variant="outlined"
                fontWeight={"bold"}
              >
               Foto :
              </Typography>
              <Grid>
                <Typography
                  variant="outlined"
                >
                  <a className='text-blue-500' target="_blank" href={user.foto} rel="noreferrer">Ver foto</a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                variant="outlined"
                fontWeight={"bold"}
              >
               Fecha Nacimiento :
              </Typography>
              <Grid>
                <Typography
                  variant="outlined"
                >
                  {user.fechaNacimiento}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                variant="outlined"
                fontWeight={"bold"}
              >
               Discapacitado:
              </Typography>
              <Grid>
                <Typography
                  variant="outlined"
                >
                  {user.discapacitado}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                variant="outlined"
                fontWeight={"bold"}
              >
               Tipo de Discapacidad:
              </Typography>
              <Grid>
                <Typography
                  variant="outlined"
                >
                  {user.tipoDiscapacidad?user.tipoDiscapacidad:"No aplica"}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
              <Typography
                variant="outlined"
                fontWeight={"bold"}
              >
               Victima de violencia:
              </Typography>
              <Grid>
                <Typography
                  variant="outlined"
                >
                  {user.victimaViolencia}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
               EPS :
              </Typography>
              <Grid>
                <Typography
                  
                  variant="outlined"
                >
                  {eps.filter((ep)=> ep.value===user.EPS)[0].eps}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
               Servicios Solicitados :
              </Typography>
              <Grid>
                <Typography
                  
                  variant="outlined"
                >
                  {user.serviciosSolicitado.toString()}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <Typography
                
                variant="outlined"
                fontWeight={"bold"}
              >
               Historia :
              </Typography>
              <Grid>
                <Typography
                  
                  variant="outlined"
                >
                  {user.tuHistoria}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            p: 2
          }}
        >
          <Button
            color="primary"
          >
            Aplica para Fundacion Soy Tu
          </Button>
        </Box>
      </Card>
    </form>
  );
};
