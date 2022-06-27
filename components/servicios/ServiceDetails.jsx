import { Avatar, Box, Card, CardContent, CardHeader, Divider, FormControlLabel, Grid, Typography } from "@mui/material";
import { ActualizarEstadoServicio } from "../../graphql/servicios/mutations";
import { departamentos } from "../../utils/deparamentos";
import { useMutation } from "@apollo/client/react";
import { ListaServiciosTabla } from "./ListaServiciosTabla";
import { IOSSwitch } from "./ServiciosTabla.css";

export const ServicioDetails = ({servicio}) => {

    const [ actualizarEstadoServicio, { loading } ] = useMutation(ActualizarEstadoServicio);


    const handleState=(e,identificacion) => {
        actualizarEstadoServicio({
          variables: {habilitado:e.target.checked,identificacion}
        })
      }

    return (
      <form
        autoComplete="off"
        noValidate
      >
            <Card>
            <CardHeader
                subheader={`${servicio.tipoDocumento} ${servicio.identificacion}`}
                title={`${servicio.nombreCompleto}`}
                avatar={
                <Avatar
                src={servicio.foto}
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
                    Celular :
                    </Typography>
                    <Grid
                    >
                    <Typography
                    
                    variant="outlined"
                    >
                    {servicio.celular}
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
                        {departamentos.filter((dpto)=> dpto.codigo===servicio.departamento)[0].nombre}
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
                        {servicio.municipio}
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
                        {servicio.direccion}
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
                    Distintivo de Habilitacion :
                    </Typography>
                    <Grid>
                    <Typography
                        variant="outlined"
                    >
                        <a className='text-blue-500' target="_blank" href={servicio.distintivoHabilitacion} rel="noreferrer">Ver Distintivo</a>
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
                    Hoja de vida:
                    </Typography>
                    <Grid>
                    <Typography
                        variant="outlined"
                    >
                        <a className='text-blue-500'  target="_blank" href={servicio.hojaVida} rel="noreferrer">Ver hoja de vida</a>
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
                        <a className='text-blue-500' target="_blank" href={servicio.foto} rel="noreferrer">Ver foto</a>
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
                    Foto publicidad:
                    </Typography>
                    <Grid>
                    <Typography
                        variant="outlined"
                    >
                        <a className='text-blue-500' target="_blank" href={servicio.fotoLogoPublicidad} rel="noreferrer">Ver foto</a>
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
                    Convalidacion ICFES:
                    </Typography>
                    <Grid>
                    <Typography
                        variant="outlined"
                    >
                        <a className='text-blue-500' target="_blank" href={servicio.convalidacionIcfes} rel="noreferrer">Ver Certificado</a>
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
                    Habilitado en la fundacion:
                    </Typography>
                    <Grid>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} onChange={ (e)=>handleState( e, servicio.identificacion ) } defaultChecked={servicio.habilitado} />}
                  />
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
                    Resumen Curriculum :
                    </Typography>
                    <Grid>
                    <Typography
                        
                        variant="outlined"
                    >
                        {servicio.resumenCurriculum}
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
            </Box>
            </Card>
            <ListaServiciosTabla ListaServicios={servicio.servicios} />
      </form>
    );
  };