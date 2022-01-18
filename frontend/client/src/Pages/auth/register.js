import React,{useState} from 'react'
import { Card, Grid, TextField, CardMedia, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from "react-router";

// inline style for card
const timeLineTop = {
    position: "static",
    marginTop: "110px",
}

const Register = () => {

    // insert data with form
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPerson = { ...form };
        console.log(form.firstname)
        await fetch("http://localhost:2020/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        setForm({ firstname: "", lastname: "", email: "", password:"" });
        navigate("../user");
    }


    return (
        <div style={{ padding: "20px" }}>
            <Card style={timeLineTop}>
                <Grid container>
                    <Grid item xs={4} >
                        <CardMedia component="img" height="420" image="/images/register.png" alt="contact field" />
                    </Grid>
                    <Grid item xs={8} >
                        <Typography gutterBottom variant="h4" component="div" style={{margin:"10px"}}>
                            Register
                        </Typography>
                        <Box
                            component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '78ch' }, }} onSubmit={onSubmit} autoComplete>
                            <div>
                                <TextField required id="outlined-required" label="Firstname" type="text" placeholder="Enter your firstname here" name="firstname" value={form.firstname} onChange={(e) => updateForm({ firstname: e.target.value })} />
                            </div>
                            <div>
                                <TextField required id="outlined-required" label="Lastname" name="lastname" type="text" placeholder="Enter your lastname here" value={form.lastname} onChange={(e) => updateForm({ lastname: e.target.value })}  />
                            </div>
                            <div>
                                <TextField required id="outlined-required" label="Email" name="email" type="email" placeholder="person@gmail.com" value={form.email} onChange={(e) => updateForm({ email: e.target.value })} />
                            </div>
                            <div>
                                <TextField required id="outlined-required" label="Password" name="password" type="password" placeholder="Enter your password here" value={form.password} onChange={(e) => updateForm({ password: e.target.value })} />
                            </div>
                            <div>
                                <TextField id="outlined-required" label="Confirmpassword" type="password" placeholder="Enter your confirmpassword here" />
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

export default Register
