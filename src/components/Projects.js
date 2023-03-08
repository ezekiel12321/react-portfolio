import React from 'react'
import MediaCard from './MediaCard'
import { Box, Grid, Container, Typography } from '@mui/material'

const Projects = () => {

    const projects = [
        {
            title: "Sudoku Board",
            description: "Implemented sudoku-solver using heuristics that solves 1000 different sudoku puzzles in 11.3 seconds",
            image: "https://cdn-images-1.medium.com/max/1440/1*G790WwdcWq-O-9spMxZSVQ.png",
            github: "https://github.com/ezekiel12321/PrimaryProjects/blob/main/Sudoku_Solver_With_Heuristics.py"
        },
        {
            title: "Simulation",
            description: "Implemented a pseudo-random probability-based simulated bus route, simulating thousands of people getting on/off bus at different stops",
            image: "https://journals.plos.org/plosone/article/figure/image?download&size=large&id=10.1371/journal.pone.0232799.g006",
            github: "https://github.com/ezekiel12321/PrimaryProjects/blob/main/Simulator.py"
        },
        {
            title: "Shortest -Path",
            description: "Designed algorithm with cost-based nodes, exploring all available pathways, and finds the most efficient way to get from one node to another in Python",
            image: "https://www.geeksforgeeks.org/wp-content/uploads/Fig-11.jpg",
            github: "https://github.com/ezekiel12321/PrimaryProjects/blob/main/Graphs_reachability.py"
        },



    ]

    return (
        <Box component="div" sx={{
            margin: 3
        }}>
            <Typography id = "projects" variant="h4" color="inherit" component="div" sx={{

                margin: 2
            }}>
                Projects
            </Typography>
            <Grid container justify="center" justifyContent="space-between" sx={{
                marginTop: 4
            }}>
                <Grid item xs={4} sm={3} ml={5}>
                    <MediaCard github={projects[0].github} title={projects[0].title} description={projects[0].description} image={projects[0].image}></MediaCard>
                </Grid>

                <Grid item xs={4} sm={3}>
                    <MediaCard github={projects[1].github} title={projects[1].title} description={projects[1].description} image={projects[1].image}></MediaCard>
                </Grid>
                <Grid item xs={4} sm={3} mr={5}>
                    <MediaCard github={projects[2].github} title={projects[2].title} description={projects[2].description} image={projects[2].image}></MediaCard>
                </Grid>




            </Grid>




        </Box>
    )
}

export default Projects
