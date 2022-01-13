import React from 'react'
import { Card, Grid, TextField, CardMedia, Typography, Button, Input, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
const timeLineTop = {
    position: "static",
    marginTop: "110px",
}

const profile = () => {
    return (
        <div>
            <Card style={timeLineTop}>
                <Grid container style={{ padding: "10px" }}>
                    <Grid item xs={8} >
                        <Typography gutterBottom variant="h4" component="div">
                            Profile
                        </Typography>
                        <Box
                            component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '78ch' }, }} noValidate autoComplete="off">
                            <div>
                                <TextField required id="outlined-required" label="Firstname" type="text" placeholder="Enter your Firstname here.." />
                            </div>
                            <div>
                                <TextField required id="outlined-required" label="Lastname" type="text" placeholder="enter your lastname here.." />
                            </div>
                            <div>
                                <label htmlFor="icon-button-file">
                                    <Input accept="image/*" id="icon-button-file" type="file" />
                                    <IconButton color="success" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                </label>
                            </div>
                            <div>
                                <Button sx={{ m: 2 }} variant="contained" size="large" color="success" >Contact us</Button>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={4} >
                        <CardMedia component="img" height="360" image="/images/contact2.png" alt="contact field" />
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default profile
