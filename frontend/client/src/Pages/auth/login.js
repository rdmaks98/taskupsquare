import React from 'react'
import { Card, Grid, TextField, CardMedia, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'


const timeLineTop = {
    position: "static",
    marginTop: "110px",
}

const login = () => {
    return (
        <div>
            <Card style={timeLineTop}>
                <Grid container style={{ padding: "10px" }}>
                    <Grid item xs={6} >
                        <Typography gutterBottom variant="h4" component="div">
                            Login
                        </Typography>
                        <Box
                            component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '68ch' }, }} noValidate autoComplete="off">
                            <div>
                                <TextField required id="outlined-required" label="Email" type="email" placeholder="person@gmail.com" />
                            </div>
                            <div>
                                <TextField required id="outlined-required" label="Password" type="password" placeholder="enter your password here.." />
                            </div>
                            <div>
                                <Button sx={{ m: 2 }} variant="contained" size="large" color="primary" >Sign In</Button>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <CardMedia component="img" height="420" image="/images/signin.png" alt="contact field" />
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default login
