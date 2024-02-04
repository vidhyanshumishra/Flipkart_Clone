

import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ButtonGroup from './ButtonGroup';
import { removeToCart } from '../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';


const Component = styled(Box)`
 border-top: 1px solid #f0f0f0;
 display: flex;
 background: #fff;
`
const LeftComponent= styled(Box)`
 margin:20px;
 display: flex;
 flex-direction: column;
`
const Remove=styled(Button)`
 margin-top: 20px;
 font-size: 16px;
 color: black;
 font-weight: 600;
`

const CartItem = ({item}) => {

    const fassured ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";


    const dispatch = useDispatch();
    const removeCartItem=(id)=>{
        dispatch(removeToCart(id))
    }


  return (
    <Component>
        <LeftComponent style={{wordWrap:'break-word'}}>
            <img src={item.url} alt="product"  style={{height: 110, width: 110}}/>
            <ButtonGroup/>
        </LeftComponent>
        <Box style={{margin: 20}}>
            <Typography>{item.title.longTitle}</Typography>
            <Typography style={{color: "#878787", fontSize:14, marginTop:10}}>Seller: Vidhyanshu
                <Box component='span'>
                    <img src={fassured} alt="flipkart" style={{marginLeft:10, width:50}} />
                </Box>
            </Typography>
            <Typography style={{margin:'20px 0'}}>
               <Box component="span" style={{ fontWeight:"bold", fontSize: 16 }}>₹{item.price.cost}</Box>{" "}&nbsp;&nbsp;&nbsp;
               <Box component="span" style={{ color: "#878787" }}><strike>{item.price.mrp}</strike></Box>{" "}&nbsp;&nbsp; &nbsp;
               <Box component="span" style={{ color: "#388E3C" }}>{item.price.discount}</Box>
            </Typography>
            <Remove onClick={()=>removeCartItem(item.id)}>Remove</Remove>
        </Box>
    </Component>
  )
}

export default CartItem;
