import React, { useContext, useState } from 'react'
import { Box, Button, Typography, styled, Badge } from '@mui/material'
import {ShoppingCart} from '@mui/icons-material';
import LoginDailog from '../login/LoginDailog';
import {DataContext} from '../../context/DataProvider';
import Profile from './Profile';
import {Link} from 'react-router-dom';
import CartItem from '../cart/CartItem';
import { useSelector } from 'react-redux';


const Wraper = styled(Box)`
   display: flex;
   margin: 0 3% 0 auto;
   & > button, & > p, & > div{
    margin-right: 40px;
    font-size: 16px;
    align-item: center;
   }
`
const LoginButton = styled(Button)`
     color: blue;
     text-transform: none;
     padding: 5px 40px;
     border-radius: 2px;
     background: white;
     font-weight: 600;
     height: 29px;
`
const Container=styled(Link)`
  display: flex;
  margin-top: 3px;
  text-decoration:none; 
  color:inherit;
`

const CustomButton = () => {

  const [open, setOpen] = useState(false);
  const {account, setAccount} = useContext(DataContext);

  const {cartItems}= useSelector(state=> state.cart);

  const openDialog =()=>{
    setOpen(true);  
  }

  return (
    <Wraper>
     {
      account ? <Profile account={account} setAccount={setAccount}/>
      :<LoginButton variant="contained" onClick={()=>openDialog()}>LogIn</LoginButton>}
     <Typography style={{marginTop: 3, width: 135}}>Become a seller</Typography>
     <Typography style={{marginTop: 3}}>More</Typography>

     <Container to="/cart">
        <Badge badgeContent={CartItem?.length} color='secondary'>
           <ShoppingCart/>
        </Badge>
        <Typography style={{marginLeft: 9}}>Cart</Typography>
     </Container>
     <LoginDailog open={open} setOpen={setOpen} />

    </Wraper>
  )
}

export default CustomButton
