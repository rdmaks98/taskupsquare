import { Button, Card, CardMedia, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const timeLineTop = {
    position: "static",
    marginTop: "110px",
}

const Password = () => {
    return (
        <div>
            <Card style={timeLineTop}>
                <Grid container style={{ padding: "10px" }}>
                    <Grid item xs={8} >
                        <Typography gutterBottom variant="h4" component="div">
                            Change Password
                        </Typography>
                        <Box
                            component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '78ch' }, }} noValidate autoComplete="off">
                            <div>
                                <TextField required id="outlined-required" label="Oldpassword" type="password" placeholder="Enter your oldpassword here" />
                            </div>
                            <div>
                                <TextField required id="outlined-required" label="Newpassword" type="password" placeholder="Enter new password here" />
                            </div>
                            <div>
                                <TextField required id="outlined-required" label="Confirmpassword" type="password" placeholder="Enter new Confirmpassword here" />
                            </div>
                            <div>
                                <Button sx={{ m: 2 }} variant="contained" size="large" color="success" >Change Password</Button>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} >
                        <CardMedia component="img" height="360" image="/images/Password.png" alt="contact field" />
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default Password
