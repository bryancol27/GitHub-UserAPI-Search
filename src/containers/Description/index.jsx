import { Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react'

//import components
import PaperInformation from '../../components/PaperInformation';
import LocationInformation from '../../components/LocationInformation';

const Description = (props) => {

    const { currentUser } = props
    const {
        bio
    } = currentUser

    return (
        <Fragment>
            <Stack
                sx={{
                    justifyContent: 'center'
                }}
            >
                {bio != null 
                    ?<Typography variant='body1'>{bio}</Typography>
                    :<Typography variant='body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde tempora quia amet voluptatum molestias. Consectetur accusantium.</Typography>
                }
            </Stack>
            <PaperInformation currentUser={currentUser}/>
            <LocationInformation currentUser={currentUser}/>
        </Fragment>
    )
};

export default Description
