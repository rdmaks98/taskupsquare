import React from 'react'
import { Card, Grid, TextField, CardMedia, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'


const timeLineTop = {
    position: "static",
    marginTop: "110px",
}

const register = () => {
    return (
        <div>
            <Card style={timeLineTop}>
                <Grid container style={{ padding: "10px" }}>
                    <Grid item xs={4} >
                        <CardMedia component="img" height="420" image="/images/register.png" alt="contact field" />
                    </Grid>
                    <Grid item xs={8} >
                        <Typography gutterBottom variant="h4" component="div">
                            Register
                        </Typography>
                        <Box
                            component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '78ch' }, }} noValidate autoComplete="off">
                            <div>
                                <TextField required id="outlined-required" label="Firstname" type="text" placeholder="Enter your firstname here" />
                            </div>
                            <div>
                                <TextField required id="outlined-required" label="Lastname" type="text" placeholder="Enter your lastname here" />
                            </div>
                            <div>
                                <TextField required id="outlined-required" label="Email" type="email" placeholder="person@gmail.com" />
                            </div>
                            <div>
                                <TextField required id="outlined-required" label="Password" type="password" placeholder="Enter your password here" />
                            </div>
                            <div>
                                <TextField required id="outlined-required" label="Confirmpassword" type="email" placeholder="Enter your confirmpassword here" />
                            </div>
                            <div>
                                <Button sx={{ m: 2 }} variant="contained" size="large" type="submit" color="primary" >Sign Up</Button>
                            </div>
                        </Box>
                    </Grid>
                    
                </Grid>
            </Card>
        </div>
    )
}

export default register
