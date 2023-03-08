import React from 'react'
import { Box, Grid, Typography } from '@mui/material'


const About = () => {
    return (
        <Box>
            <Typography id="about" variant="h4" color="inherit" component="div" sx={{

                margin: 5
            }}>
                About
            </Typography>
            <Grid >






                <Grid container justifyContent="flex-start" sx={{
                    marginTop: 4
                }}>
                    <Grid item xs={3} sm={3} ml={8}>
                        <img src="https://i.imgur.com/jinyH31.jpg/" alt="" height="400px" width="320px" />
                    </Grid>

                    <Grid item xs={3} sm={3} ml={25} mt={5} >
                        <Typography width="600px" variant="body1" color="inherit" component="div" sx={{


                        }}>
                            Hi there! My name is Ezekiel Norman, and I'm excited to share a little bit about myself with you. I'm a passionate developer with experience as a mobile developer. Over the years, I've honed my skills and gained valuable experience in various programming languages such as Java, Kotlin, C++, Python, React, Javascript, and CSS.

                            In addition to my mobile development skills, I also have experience in web development. I'm fluent in React, Javascript, and CSS, and I've used these skills to create beautiful and responsive web applications. I believe that my ability to work in both mobile and web development has given me a unique perspective and has helped me become a more versatile and adaptable developer.

                            Overall, I'm a dedicated and hardworking developer who is always looking for new challenges and opportunities to grow. I'm excited about what the future holds and can't wait to see where my skills will take me next.
                        </Typography>
                    </Grid>





                </Grid>
            </Grid>


        </Box>
    )
}

export default About
