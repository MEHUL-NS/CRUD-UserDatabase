import React , {useEffect, useState} from "react";
import { FormControl, FormGroup, Input, InputLabel, Typography ,styled, Button} from "@mui/material";
import { getUser , editUser} from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top:10px
    }
`

const EditUser = () =>{
    const defaultValue ={
        name : '',
        username: '',
        email: '',
        phone:''        
    }

    const navigate = useNavigate();
    const {id} = useParams()
    const [user,setUser] = useState(defaultValue);

    function onValueChange(e){
        setUser({...user , [e.target.name] : e.target.value})        
    }

    useEffect(()=>{
        loadUserDetails()
    }, [])

    async function loadUserDetails(){
        const res = await getUser(id);  
        setUser(res.data)                   
    }
    
    async function editUserDetails(){
        await editUser(user,id);
        navigate('/all')
    }

    return(
            <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
            </FormControl>     

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>           </FormControl>   
            <FormControl>

                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>            </FormControl>       
            <FormControl>

                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>          </FormControl>    
            <FormControl>
                <Button variant="conatained" onClick={()=>{editUserDetails()}}>Edit User</Button>
            </FormControl>  
            </Container>
       
    )
}

export default EditUser