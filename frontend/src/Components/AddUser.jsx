import React , {useState} from "react";
import { FormControl, FormGroup, Input, InputLabel, Typography ,styled, Button} from "@mui/material";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
    width:50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top:10px
    }
`

const AddUser = () =>{
    const defaultValue ={
        name : '',
        username: '',
        email: '',
        phone:''        
    }
    const navigate=useNavigate();
    const [user,setUser] = useState(defaultValue);

    function onValueChange(e){
        setUser({...user , [e.target.name] : e.target.value})
        console.log(user)
    }
    async function addUserDetails(){
        await addUser(user);
        navigate('/all')                     
    }

    return(
            <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/>
            </FormControl>     

            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>           </FormControl>   
            <FormControl>

                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>            </FormControl>       
            <FormControl>

                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/>          </FormControl>    
            <FormControl>
                <Button variant="conatained" onClick={()=>{addUserDetails()}}>Add User</Button>
            </FormControl>  
            </Container>
       
    )
}

export default AddUser