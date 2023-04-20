import * as React from 'react';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import { styled } from '@mui/system';
import { OptionUnstyled, PopperUnstyled } from '@mui/base';

const Button = React.forwardRef(function Button(props, ref,) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
        {other.children}
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4197 1.92786C13.5816 1.76936 13.6719 1.5581 13.6719 1.31478C13.6719 0.824083 13.2913 0.440747 12.8019 0.440747C12.5559 0.440747 12.329 0.532997 12.1699 0.704447L6.62835 6.37595L7.36531 6.37595L1.82922 0.704448C1.6653 0.531648 1.43702 0.440748 1.19852 0.440748C0.710525 0.440748 0.328603 0.824084 0.328603 1.31478C0.328603 1.55945 0.417447 1.77072 0.582147 1.92786L6.31817 7.79811C6.50858 7.99955 6.74033 8.10276 6.99645 8.10547C7.25742 8.10547 7.48432 8.00091 7.68095 7.79811L13.4197 1.92786Z" fill="#222222"/>
        </svg>
    </button>
  );
});

const StyledButton = styled(Button, { shouldForwardProp: () => true })(({ theme }) => ({
    fontFamily: "'Roboto Mono',monospace",
    position: 'relative',
    width: '512px',
    height: '52px',
    padding: `16px 20px`,
    fontSize: '15px',
    textAlign: 'left',
    background: `${theme.palette.secondary.light}`,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: '7px',
    '& > svg': {
        position: 'absolute',
        height: '100%',
        top: '0',
        right: '22px',
    }
}))

const StyledListbox = styled('ul')(({ theme }) => ({
    fontFamily: "'Roboto Mono',monospace",
    width: '512px',
    padding: '12px',
    overflow: 'auto',
    background: '#fff',
    boxShadow: `0px 4px 30px ${theme.palette.secondary.main}`
}));

export const SelectorOption = styled(OptionUnstyled)(({ theme }) => ({
    listStyle: 'none',
    padding: '8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
}));
  

const StyledPopper = styled(PopperUnstyled)`
    z-index: 1000;
`;

export const CustomSelector = React.forwardRef(function CustomSelect(props, ref,) {
    const slots = {
        root: StyledButton,
        listbox: StyledListbox,
        popper: StyledPopper,
        ...props.slots,
    };

    return <SelectUnstyled {...props} ref={ref} slots={slots} />;
});