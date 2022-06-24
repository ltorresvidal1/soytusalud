import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme (
    {
        palette: {
            mode: 'dark',
        },
        components:{
            MuiAppBar:{
                defaultProps:{
                    elevation: 0
                },
                styleOverriders:{
                    root:{
                        backgroundColor: '#343879'
                    }
                }
            }
        },
    }
)

// primary: {
//     main: '#343879',
// },
// secondary: {
//     main: 'white'
// }