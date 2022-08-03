import { Grid, Stack, Typography } from '@mui/material';
import React from 'react'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TwitterIcon from '@mui/icons-material/Twitter'; 
import BookIcon from '@mui/icons-material/Book';

const LocationInformation = (props) => {

    const { currentUser } = props;
    const { 
        location,
        twitter_username,
        blog,
        company
    } = currentUser;

    return (
        <Grid
            spacing={2}
            container
        >

            <Grid item xs={6}>
                <Stack direction='row' spacing={1}>
                    <LocationOnIcon/>
                    <Typography>
                        {location 
                            ? location
                            : 'Not Defined'
                        }
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={6}>
                <Stack direction='row' spacing={1}>
                    <ApartmentIcon />
                    <Typography>
                        {company 
                            ? company
                            : '@Not Defined'
                        }
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={6}>
                <Stack direction='row' spacing={1}>
                    <TwitterIcon/>
                    <Typography>
                        {twitter_username 
                            ? twitter_username
                            : 'Not Defined'
                        }
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={6}>
                <Stack direction='row' spacing={1}>
                    <BookIcon/>
                    <Typography>
                        {blog 
                            ? blog
                            : 'Not Defined'
                        }
                    </Typography>
                </Stack>
            </Grid>

        </Grid>
    )
};

export default LocationInformation
