import React, { Fragment } from 'react'
import { Stack, Typography } from '@mui/material';

const PrincipalInformation = (props) => {

    const { currentUser } = props;
    const { 
        name, 
        login, 
        created_at } = currentUser;

    return (
        <Fragment>
            <Stack
                direction="row"
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography
                    variant='h4'
                >
                    {name}
                </Typography>

                <Typography
                    variant='subtitle2'
                >
                    {created_at}
                </Typography>
            </Stack>

            <Typography
                variant='caption'
            >
                {`@${login}`}
            </Typography>
        </Fragment>
    )
};

export default PrincipalInformation