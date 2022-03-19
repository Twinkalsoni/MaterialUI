import { AppBar, Button, Toolbar, Typography, Link } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import {Box} from '@mui/system'; 
import store from '../image/store.svg';
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position='static' >
            <Toolbar>
                <Typography variant='h6' flexGrow={1}>
                    <Box component= "img" src={store} sx={{marginright:"12px",width:"20px",height:"25px"}}/>
                    Store
                </Typography>

                <Button variant="contained" color="primary">Download</Button>
                <Link href="#" color="inherit" endIcon={<CloseIcon />}>Remove frame</Link>

            </Toolbar>

        </AppBar>
    )
}

export default Navbar