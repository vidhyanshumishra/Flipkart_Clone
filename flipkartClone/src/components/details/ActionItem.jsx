import styled from '@emotion/styled'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/actions/cartAction';


const LeftContainer = styled(Box)`
min-width: 40%;
padding: 40px 0 0 80px;
`
const Image = styled('img')({
   padding: '15px',
})

const StyleButton = styled(Button)`
width: 46%;
height: 50px;
border-radious:2px;
margin: 7px;
`


const ActionItem = ({product}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qunatity, setQuantity] = useState(1);
  const {id} = product;


  const addItemToCart=()=>{
    dispatch(addToCart(id, qunatity))
    navigate('/cart')
  }

  return (
    <LeftContainer>
        <Box style={{ padding: '15px 20px',
    border: '1px solid #f0f0f0', width: '90%'}}>
           <Image src={product.detailUrl} alt="product" />
        </Box>
      <StyleButton variant='contained' onClick={()=>addItemToCart()} style={{background: '#ff9f00'}}><AddShoppingCart/> Add to Cart</StyleButton>
      <StyleButton variant='contained' style={{background: '#fb541b'}}><BoltIcon/>Buy Now</StyleButton>
    </LeftContainer>
  )
}

export default ActionItem
