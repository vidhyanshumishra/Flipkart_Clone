


import { Grid, Typography, Box, Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import TotalView from './TotalView';
import styled from '@emotion/styled';
import EmptyCart from './EmptyCart';

const Container = styled(Grid)`
 padding: 30px 135px;
`

const Header = styled(Box)`
 padding: 15px 24px;
 background: #fff;
`

const ButtonWrapper=styled(Box)`
  padding: 15px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
`

const StyledButton = styled(Button)`
 display: flex;
 margin-left: auto;
 background: #fb641b;
 color: black;
 width: 200px;
 height: 50px;
`

const Cart = () => {


   const {cartItems} = useSelector(state=>state.cart);

  return (
    <>
    {
        cartItems.length ? 
        <Container container>
            <Grid item lg={9} md={9} sm={12} xs={12} style={{paddingRight: 15}}>
                <Header>
                    <Typography>My Cart({cartItems.length})</Typography>
                </Header>
                {
                    cartItems.map(item=>(
                        <CartItem item={item}/>
                    ))
                    
                }
                <ButtonWrapper>
                    <StyledButton>
                        Place Order
                    </StyledButton>
                </ButtonWrapper>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <TotalView cartItems={cartItems}/>
            </Grid>
        </Container>
        : <EmptyCart/>
    }
    </>
  )
}

export default Cart
