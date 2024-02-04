import React from 'react'
import {AppBar,Toolbar, styled, Box } from "@mui/material";
import Search from './Search';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';

const StyleHeader = styled(AppBar)`
    background: #2874F0;
    height: 60px;

`
const Component = styled(Link)`
margin-left: 12%;
line-height: 0;
`

const Header = () => {
  return (
    <StyleHeader>
      <Toolbar>
        <Component to='/'>
            <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt="logo" style={{width: 75}} />
        </Component>
        <Search/>
        <Box style={{margin:'0 5% 0 auto'}}><CustomButton/></Box>
      </Toolbar>
    </StyleHeader>
  )
}

export default Header;