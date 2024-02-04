import {
  Typography,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import styled from "@emotion/styled";

const SmallText = styled(Box)`
font-size: 14px;
vertical-align: baseline;
&>p{
    font-size: 14px;
    margin:top: 10px;
}
`;
const NewBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: green;
  font-size: 20px;
`;

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Rating 7 & Reviews
        <Box component="span">
          <img
            src={fassured}
            alt="assured"
            style={{ width: 77, marginLeft: 20 }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>{" "}
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>{product.price.mrp}</strike>
        </Box>{" "}
        &nbsp;&nbsp; &nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Availabel Offers</Typography>
      <SmallText>
        <Typography>
          <NewBadge />
          Get extra 20% off upto $50 on 1 item(s) T&C
        </Typography>
        <Typography>
          <NewBadge />
          Get extra 13% off (price inclusive of discount) T&C{" "}
        </Typography>
        <Typography>
          <NewBadge />
          Buy 2 item save 5%; Buy 3 or more save 10% T&C
        </Typography>
        <Typography>
          <NewBadge />
          Buy this product and Get Extra ₹50 Off on Select Room HeatersT&C
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Dilivery </TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Dilivery by {date.toDateString()} | $ 40
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Warranty </TableCell>
            <TableCell>No Warranty</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Seller </TableCell>
            <TableCell >
                <Box style={{ color:'#2874f0' }} component="span">Vidhyanshu</Box>
                <Typography>View More seller starting from ${product.price.cost}</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>
                <img src={adURL} style={{width: 390}} alt="flipkart" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ color: "#878787" }}>Description </TableCell>
            <TableCell>{product.description}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TableRow>
            <TableCell style={{ fontWeight:'bold', fontSize:32 }}>Specifications</TableCell>
            <TableCell></TableCell>
          </TableRow>
    </>
  );
};

export default ProductDetail;
