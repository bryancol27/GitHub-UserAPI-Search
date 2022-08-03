import React, { useState } from 'react';
import { IconButton, Stack, TextField, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = ( props ) => {

    const { inputUser, setUser, notFound } = props;

    const [ valueInput, setValueInput ] = useState('');

    const handleSubmit = () => {
        setUser(valueInput)
    };

    return (
        <Stack
            direction = 'row'
            divider={<Divider orientation="vertical" variant="middle" flexItem />}
            sx={{
                gap: '10px',
                marginTop: '20px',
                width: '80%',
            }}
        >
            <TextField
                error={notFound}
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
                id="outlined-basic" 
                className='inputSearch'
                label="GitHub User" 
                variant="outlined"
                placeholder="Buscar Usuario"
                sx={{
                    width:'90%'
                }}
            />

            <IconButton 
            onClick={handleSubmit}
            sx={{
                width: '50px',
                height: '50px'
            }}
            >
                <SearchIcon></SearchIcon>
            </IconButton>
        </Stack>
    )
};

export default Searcher