import { Button, InputBase, Paper } from "@mui/material";
import { styled } from "@mui/system";

export const FileInputContainer = styled(Paper)(({theme}) => ({
    display: 'flex',
    position: 'relative',
}))

export const FileInputDisplay = styled(InputBase)(({theme}) => ({
    paddingRight: '45px',
    border: `1px dashed ${theme.palette.secondary.main}`,
    width: '100%',
    backgroundColor: theme.palette.secondary.light,
}))

const InputButtonBase = styled(Button)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    minWidth: '52px',
    width: '52px',
    height: '52px',
    borderRadius: '0px 7px 7px 0px',
    padding: 0,
    backgroundColor: 'transparant',
    zIndex: 100
}))

const UploadButton = styled(InputButtonBase)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    pointerEvents: 'none',
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
    }
}))

export const FileUploadButton = () => {
    return (
        <UploadButton>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_609)">
            <path d="M5.368 4.56515L7.2 2.72469V10.3986C7.2 10.6108 7.28429 10.8144 7.43431 10.9644C7.58434 11.1145 7.78783 11.1988 8 11.1988C8.21217 11.1988 8.41566 11.1145 8.56569 10.9644C8.71571 10.8144 8.8 10.6108 8.8 10.3986V2.72469L10.632 4.56515C10.7064 4.64015 10.7949 4.69968 10.8923 4.74031C10.9898 4.78093 11.0944 4.80185 11.2 4.80185C11.3056 4.80185 11.4102 4.78093 11.5077 4.74031C11.6051 4.69968 11.6936 4.64015 11.768 4.56515C11.843 4.49076 11.9025 4.40226 11.9431 4.30475C11.9837 4.20723 12.0046 4.10264 12.0046 3.99701C12.0046 3.89137 11.9837 3.78678 11.9431 3.68927C11.9025 3.59176 11.843 3.50325 11.768 3.42887L8.568 0.228068C8.49192 0.155217 8.4022 0.0981108 8.304 0.0600258C8.10923 -0.0200086 7.89077 -0.0200086 7.696 0.0600258C7.5978 0.0981108 7.50808 0.155217 7.432 0.228068L4.232 3.42887C4.15741 3.50348 4.09824 3.59205 4.05787 3.68953C4.0175 3.78701 3.99673 3.89149 3.99673 3.99701C3.99673 4.10252 4.0175 4.207 4.05787 4.30448C4.09824 4.40197 4.15741 4.49054 4.232 4.56515C4.30659 4.63976 4.39514 4.69894 4.4926 4.73932C4.59006 4.7797 4.69451 4.80048 4.8 4.80048C4.90549 4.80048 5.00994 4.7797 5.1074 4.73932C5.20486 4.69894 5.29341 4.63976 5.368 4.56515ZM15.2 7.998C14.9878 7.998 14.7843 8.08231 14.6343 8.23238C14.4843 8.38244 14.4 8.58598 14.4 8.7982V13.5994C14.4 13.8116 14.3157 14.0152 14.1657 14.1652C14.0157 14.3153 13.8122 14.3996 13.6 14.3996H2.4C2.18783 14.3996 1.98434 14.3153 1.83431 14.1652C1.68429 14.0152 1.6 13.8116 1.6 13.5994V8.7982C1.6 8.58598 1.51571 8.38244 1.36569 8.23238C1.21566 8.08231 1.01217 7.998 0.8 7.998C0.587827 7.998 0.384344 8.08231 0.234315 8.23238C0.0842854 8.38244 0 8.58598 0 8.7982V13.5994C0 14.2361 0.252856 14.8467 0.702944 15.2969C1.15303 15.7471 1.76348 16 2.4 16H13.6C14.2365 16 14.847 15.7471 15.2971 15.2969C15.7471 14.8467 16 14.2361 16 13.5994V8.7982C16 8.58598 15.9157 8.38244 15.7657 8.23238C15.6157 8.08231 15.4122 7.998 15.2 7.998Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_1_609">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </UploadButton>
    )
}

const RemoveButton = styled(InputButtonBase)(({theme}) => ({
    backgroundColor: 'transparant',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
    }
}))

export const FileRemoveButton = () => {
    return (
        <RemoveButton>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_203)">
            <rect x="0.34375" y="1.75781" width="2" height="14" rx="1" transform="rotate(-45 0.34375 1.75781)" fill="#FB5454"/>
            <rect x="1.75797" y="11.6565" width="2" height="14" rx="1" transform="rotate(-135 1.75797 11.6565)" fill="#FB5454"/>
            </g>
            <defs>
            <clipPath id="clip0_1_203">
            <rect width="12" height="12" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </RemoveButton>
    )
}

const IconBox = styled(InputButtonBase)(({theme}) => ({
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    top: 0,
    left: 0,
    width: '52px', 
    height: '52px', 
    zIndex: 1000,
    pointerEvents: 'none'
}))

export const FileApproveIcon = () => {
    return (
        <IconBox>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.872869 5.23438L2.11932 3.96236L5.35369 7.15199L12.1996 0.331676L13.4652 1.60369L5.35369 9.68324L0.872869 5.23438Z" fill="#16BB5B"/>
            </svg>
        </IconBox>
    )
}