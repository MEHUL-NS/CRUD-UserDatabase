import React from "react";
import { AppBar , Toolbar , styled } from "@mui/material";
import { NavLink } from "react-router-dom";



const Header = styled(AppBar)`
    background: #111111
`

const Tabs = styled('p')`
    font-size: 20px;
    margin-right: 50px
`

const Navbar = () =>{
    return(
        <Header position="static">
            <Toolbar>
                <NavLink to='/'><Tabs>HOME</Tabs></NavLink>
                <NavLink to='/all'><Tabs>ALL USERS</Tabs></NavLink>
                <NavLink to='/add'><Tabs>Add USERS</Tabs></NavLink>
            </Toolbar>
        </Header>
    )
}

export default Navbar