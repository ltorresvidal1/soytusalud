import Head from 'next/head';
import { useAuth } from '../context/useAuth';
import { auth } from '../firebase/initConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { client } from '../graphql/initClientSide';
import useFormData from '../hooks/useFormData';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import { LayoutMain } from '../components/layouts/LayoutMain';

const Login = () => {

  const { setAuthUser } = useAuth()
  const { form, formData, updateFormData } =useFormData();
  const router = useRouter();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
     await signInWithEmailAndPassword(auth, formData.email , formData.password)
      .then(user => {
        usuarioId = user.user.uid
      })
      const { data } = await client.query({
        query: authUser,
        variables:{
          uid:usuarioId
          }
        })
      setAuthUser(data.Usuario)
  }
 
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Debe ser un email valido')
        .max(255)
        .required(
          'El email es requerido'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Contraseña requerida')
    }),
    onSubmit: () => {
      router.push('/');
    }
  });

  return (
    <>
      <Head>
        <title>Login | Soy Tu Salud</title>
      </Head>
      <LayoutMain>

        <Box
            component="main"
            sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%'
            }}
        >
            <Container maxWidth="md" className='mb-5'>
            <form ref={form} onChange={updateFormData} onSubmit={handleSubmit} >
                <Box sx={{ my: 3 }}>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        Inicia sesión
                    </Typography>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                    >
                        Inicia sesión en nuestra plataforma
                    </Typography>
                </Box>
                <Box
                sx={{
                    pb: 1,
                    pt: 3
                }}
                >
                </Box>
                    <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Correo Electronico"
                    margin="normal"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                    variant="outlined"
                    />
                    <TextField
                    error={Boolean(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Contraseña"
                    margin="normal"
                    name="Contraseña"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="Contraseña"
                    value={formik.values.password}
                    variant="outlined"
                    />
                <Box sx={{ py: 2 }}>
                <Button
                    color="primary"
                    disabled={formik.isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="outlined"
                >
                    Inicia sesión
                </Button>
                </Box>
                <Typography
                color="textSecondary"
                variant="body2"
                >
                No tienes cuenta?
                {' '}
                <NextLink
                    href="/r    egistro"
                    passHref
                >
                    <Link
                    to="/registro"
                    variant="subtitle2"
                    underline="hover"
                    sx={{
                        cursor: 'pointer'
                    }}
                    >
                    Registrate
                    </Link>
                </NextLink>
                </Typography>
            </form>
            </Container>
        </Box>
      </LayoutMain>
    </>
  );
};

export default Login;
