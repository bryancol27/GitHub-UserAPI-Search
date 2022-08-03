import { CardMedia, Grid, Stack } from '@mui/material';
import React from 'react'

//import components
import PrincipalInformation from '../../components/PrincipalInformation';

//import containers
import Description from '../Description';

const UserCard = (props) => {

    const { currentUser } = props;
    const { avatar_url } = currentUser; 


    return (
        <Grid 
            container
            spacing={2}
            sx={{
                marginTop: '15px'
            }}
        >

            <Grid 
                item 
                xs={3}
            >
                <CardMedia 
                    component="img"
                    alt='GitHub user'
                    image={avatar_url}
                    sx={{
                        borderRadius: '50%',
                        marginLeft: '10px'
                    }}
                />
            </Grid>

            <Grid
                item
                xs={9}    
            >
                <Stack
                    direction='column'
                    spacing={1}
                    sx={{
                        margin: '20px'
                    }}
                >
                    <PrincipalInformation currentUser={currentUser}/>
                    <Description currentUser={currentUser}/>
                </Stack>
            </Grid>
        </Grid>
    )
};

export default UserCard;
