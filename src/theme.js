import { createTheme, responsiveFontSizes } from "@mui/material"
import { purple, red, cyan } from "@mui/material/colors"

const theme = createTheme({
    palette: {
        primary: {
            main: red[500]
        },
        secondary: {
            main: purple[300]
        },
        testColor: {
            main: cyan[300]
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedSecondary: {
                    borderRadius: 9,
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === 'large' && {
                        width: 60,
                        height: 60,
                        color: 'black'
                    })
                })
            },
            // defaultProps: {
            //     size: "medium"
            // },
            variants: [{
                props: { variant: 'square' },
                style: {
                    borderRadius: 9
                }
            }]
        },

    }
})

export default responsiveFontSizes(theme)