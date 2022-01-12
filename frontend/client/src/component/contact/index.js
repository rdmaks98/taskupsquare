import { Card, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Contact = () => {
    return (
        <div>
            <Grid container style={{padding:"20px"}}>
                <Grid item xs={8} >
                    <Card sx={{maxWidth:"900px"}}>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <div>
                                <TextField
                                    error
                                    id="outlined-error"
                                    label="Error"
                                    defaultValue="Hello World"
                                />
                                <TextField
                                    error
                                    id="outlined-error-helper-text"
                                    label="Error"
                                    defaultValue="Hello World"
                                    helperText="Incorrect entry."
                                />
                            </div>
                            <div>
                                <TextField
                                    error
                                    id="filled-error"
                                    label="Error"
                                    defaultValue="Hello World"
                                    variant="filled"
                                />
                                <TextField
                                    error
                                    id="filled-error-helper-text"
                                    label="Error"
                                    defaultValue="Hello World"
                                    helperText="Incorrect entry."
                                    variant="filled"
                                />
                            </div>
                            <div>
                                <TextField
                                    error
                                    id="standard-error"
                                    label="Error"
                                    defaultValue="Hello World"
                                    variant="standard"
                                />
                                <TextField
                                    error
                                    id="standard-error-helper-text"
                                    label="Error"
                                    defaultValue="Hello World"
                                    helperText="Incorrect entry."
                                    variant="standard"
                                />
                            </div>
                        </Box>
                    </Card>
                </Grid>
               
            </Grid>
        </div>
    )
}

export default Contact