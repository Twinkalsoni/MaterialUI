import { Grid, ToggleButton, Typography, Toolbar } from '@mui/material'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { SearchIcon } from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from 'react';

const Mainsection = () => {
    return (
        <Grid container direction="row" alignItems="center">
            <Grid Item xs={12} sm={2}>
                <Typography variant="h6" color="inherit" flexGrow={1}>
                    Berry
                    <ToggleButton container variant= "contained" size="small" value="justify" key="justify" flexGrow={1}>
                        <FormatAlignJustifyIcon />
                        
                    </ToggleButton>
                    <NotificationsNoneIcon/>
                </Typography>
               
  
            </Grid>

        </Grid>
    )
}

export default Mainsection