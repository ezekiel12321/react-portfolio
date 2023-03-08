import React from 'react'
import * as Scroll from 'react-scroll';
import { AppBar, Toolbar, IconButton, Typography, ButtonGroup, Button, Stack, styled, Box } from '@mui/material'
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';
import { Link } from 'react-scroll'

import MenuIcon from '@mui/icons-material/Menu';
import { margin } from '@mui/system';

const navbar = () => {




    return (
        <Box sx={{
            flexGrow: 1
        }}>

            <AppBar position="sticky" color="transparent">
                <Toolbar variant="dense">

                    <Typography variant="h4" color="inherit" component="div" sx={{
                        flexGrow: 1,
                        margin: 2
                    }}>
                        Ezekiel Norman
                    </Typography>

                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab variant="extended" size="medium" color="primary" aria-label="add">
                            <BuildRoundedIcon sx={{ mr: 1 }} />
                            <Link to="projects" spy={true} smooth={true} offset={50} duration={500}>
                                PROJECTS
                            </Link>
                        </Fab>
                        <Fab variant="extended" size="medium" color="primary" aria-label="add">
                            <Face6RoundedIcon sx={{ mr: 1 }} />
                            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                                ABOUT
                            </Link>
                        </Fab>

                    </Box>


                </Toolbar>

            </AppBar>
        </Box>
    )
}

export default navbar
