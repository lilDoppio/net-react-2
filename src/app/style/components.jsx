import { createTheme } from "@mui/material";
import { paletteTheme } from "./palette";

const font = "'Roboto Mono', monospace";

export const rootTheme = createTheme(paletteTheme, {
    typography: {
        fontFamily: font,
        h6: { 
            fontSize: 18,
            fontWeight: 400,
            marginBottom: paletteTheme.spacing(6),
            color: paletteTheme.palette.text.primary
        },
        subtitle2: { 
            fontSize: 14,
            fontWeight: 400,
            marginBottom: paletteTheme.spacing(1),
            color: paletteTheme.palette.text.primary,
            opacity: '60%'
        },
        body2: { 
            fontSize: 15,
            fontWeight: 400
        }
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: font,
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: '52px',
                    padding: paletteTheme.spacing(3),
                    border: `1px solid ${paletteTheme.palette.secondary.main}`,
                    borderRadius: '7px',
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    background: '#FBFBFB',
                    border: `1px solid ${paletteTheme.palette.secondary.main}`,
                    borderRadius: '7px',
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    background: 'rgba(75, 180, 233, 0.05)',
                    border: '1px solid rgba(75, 180, 233, 0.5)',
                    borderRadius: '7px',
                    padding: '12px',
                    color: 'black',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '17px',
                    textAlign: 'center',
                }
            }
        }
    },
})