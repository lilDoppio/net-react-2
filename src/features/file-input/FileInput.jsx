import React, { useRef, useState } from 'react';
import { Box, InputBase } from "@mui/material";
import { FileApproveIcon, FileInputContainer, FileInputDisplay, FileRemoveButton, FileUploadButton } from '../../shared/ui/input/FileInput';
import { useStoreRouter } from '../../app/hooks/useStoreRouter';

const FileInput = ({ storeProp, store }) => {
    const {storeValue, setStoreValue} = useStoreRouter(storeProp, store)
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState({name: ''});
    const ref = useRef()

    const onRemove = (e) => {
        e.preventDefault()
        e.stopPropagation()
        ref.current.children[0].value = null
        setFile({name: ''})
        setStoreValue(null, storeProp)
    }

    const onUpload = (e) => {
        if (dragActive) {
            try {
                setFile(e.dataTransfer.files[0])
                setStoreValue(e.dataTransfer.files[0], storeProp)
            } catch {}
        } else {
            const file = e.target.files[0] ?? null
            if (file) {
                setFile(file)
                setStoreValue(file, storeProp)
            } else {
                setFile({name: ''})
                setStoreValue(null, storeProp)
            }
        }
       
    }

    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    return (
        <FileInputContainer elevation={0} onChange={onUpload} onDragEnter={handleDrag}>
            <InputBase type='file' ref={ref} onDrop={onUpload} name={storeProp}
                sx={{ position: 'absolute', zIndex: 10, opacity: 0 }}
            />
            {file.name ? 
            <FileApproveIcon />
            : ''}
            <FileInputDisplay value={file.name} readOnly placeholder='Выберите или перетащите файл' 
                sx={{ paddingLeft: file.name ? '45px' : '18px', color: file.name ? '#5795FD' : 'black' }}
            />
            {file.name ?
            <Box onClick={onRemove}>
                <FileRemoveButton/>
            </Box>
            :
            <FileUploadButton/>}
        </FileInputContainer>
    )
}

export default FileInput