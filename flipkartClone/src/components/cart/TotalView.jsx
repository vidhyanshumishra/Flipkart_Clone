import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const HeadingView = styled(Box)`
 padding: 15px 24px;
 background: #fff;
 border-bottom: 1px Solid #f0f0f0;
`

const Container = styled(Box)`
padding: 15px 24px;
background: #fff;
&>p{
  margin-bottom: 20px;
  font-size: 14px;
}
&>h6{
  margin-bottom: 20px;
}
`

const TotalView = ({ cartItems }) => {

  const[price, setPrice] = useState(0);
  const[discount, setDiscount]= useState(0);

  useEffect(()=>{
    totalAmount();
  },[cartItems])

  const totalAmount = ()=>{
    let price = 0, discount = 0;
    cartItems.map(item=>{
      price += item.price.mrp;
      discount += (item.price.mrp-item.price.cost);
    })
    setPrice(price);
    setDiscount(discount);
  }


  return (
    <Box>
      <HeadingView>
        <Typography style={{color:'#878787'}}>PRICE DETAILS</Typography>
      </HeadingView>
      <Container>
        <Typography>Price ({cartItems?.length} item)
             <Box component='span' style={{float:'right'}}>₹{price}</Box>
        </Typography>
        <Typography>Discount
             <Box component='span' style={{float:'right'}}>-₹{discount}</Box>
        </Typography>
        <Typography>Delivery Charges
             <Box component='span'style={{float:'right'}}>₹30</Box>
        </Typography>
        <Typography variant='h6'>Total Amount
             <Box component='span'style={{float:'right'}}>₹{price-discount + 40}</Box>
        </Typography>
        <Typography style={{color:'green', fontWeight:'bold'}}>You will save ₹{discount- 40} on this order</Typography>
      </Container>
    </Box>
  );
};

export default TotalView;
