import { InputBase } from "@mui/material";
import { styled } from "@mui/system";

export const SubmitButton = styled(InputBase)(({theme}) => ({
    height: '52px',
    width: 'min-content',
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '7px',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    transition: '0.15s',
    cursor: 'pointer',
    '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: 'white',
    },
}))