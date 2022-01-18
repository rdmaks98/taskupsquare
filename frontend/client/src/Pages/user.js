import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const timeLineTop = {
    position: "static",
    marginTop: "110px",
}


const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch(`http://localhost:2020/api/user`);
            console.log(response)
            if (!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const users = await response.json();
            console.log(users);
            setUsers(users);
        }

        getUsers();

        return;
    }, []);


    return (
        <div style={timeLineTop}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ color: "#175C19", backgroundColor: "#81c784"}}>
                            <TableCell>No.</TableCell>
                            <TableCell>Firstname</TableCell>
                            <TableCell>Lastname</TableCell>
                            <TableCell>Profile</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user,i) => (
                            <TableRow
                                key={user._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{i+1}</TableCell>
                                <TableCell>
                                    {user.firstname}
                                </TableCell>
                                <TableCell>{user.lastname}</TableCell>
                                
                                <TableCell><img src={user.profilePhoto}></img>{user.profilePhoto}</TableCell>
                                
                                <TableCell>{user.email}</TableCell>
                               
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default User
