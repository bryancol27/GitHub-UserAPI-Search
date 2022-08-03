import { Paper, Stack, Typography } from '@mui/material';
import React from 'react'

const PaperInformation = (props) => {

    const { currentUser } = props;
    const { 
        public_repos,
        followers,
        following
    } = currentUser;

    return (
        <Paper elevation={3}>
            <Stack 
                spacing={3}
                direction='row'
                justifyContent='space-around'
                sx={{margin: '20px'}}
            >
                
                <Stack
                    spacing={2}
                    alignItems='center'
                >
                    <Typography variant='h5' sx={{fontWeight: 'bold'}}>Repos</Typography>
                    <Typography>{public_repos}</Typography>
                </Stack>

                <Stack
                    spacing={2}
                    alignItems='center'
                >
                    <Typography variant='h5' sx={{fontWeight: 'bold'}}>Followers</Typography>
                    <Typography>{followers}</Typography>
                </Stack>

                <Stack
                    spacing={2}
                    alignItems='center'
                >
                    <Typography variant='h5' sx={{fontWeight: 'bold'}}>Following</Typography>
                    <Typography>{following}</Typography>
                </Stack>
                
            </Stack>
        </Paper>
    )
}

export default PaperInformation
