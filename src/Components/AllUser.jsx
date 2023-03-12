import React , {useEffect , useState} from "react";
import { Table, TableCell, TableHead, TableRow , styled ,Button, TableBody} from "@mui/material";
import { getUsers , deleteUser } from "../Service/api";
import { Link } from "react-router-dom";

const Tablestyle = styled(Table)`
    width:90%;
    margin:50px auto 0 auto;    
`
const THead = styled(TableRow)`
    background:#000000;
    & > th{
        color:#fff;
        font-size:20px;
    }
`
const TBody = styled(TableRow)`
    & > td{
        fonst-size:20px
    }
`

const AllUser = () =>{
    

    const [users,setUsers] = useState([])
    useEffect(()=>{
        getAllUsers()
    },[]) 

    const getAllUsers = async() =>{
        const res = await getUsers()
        setUsers(res.data)
    }

    const deleteUserDetails = async(id) =>{
        await deleteUser(id)
        await getAllUsers();
    }
    

    return(
        <div>
            <Tablestyle>
                <TableHead>
                    <THead>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                    </THead>
                </TableHead>

                <TableBody>
                    {users.map(user => (
                        <TBody key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <div>
                                    <Button variant="contained" component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={()=>{deleteUserDetails(user._id)}}>Delete</Button>
                                </div>
                            </TableCell>
                        </TBody>
                    ))}
                </TableBody>
            </Tablestyle>            
        </div>
    )
}

export default AllUser