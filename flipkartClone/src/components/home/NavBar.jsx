import { Box, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../constants/data";
import styled from "@emotion/styled";

const Component = styled(Box)`
     display: flex;
     margin: 64px 130px 0 130px;
     justify-content: space-between;
`

const Container = styled(Box)`
padding: 12px 8px;
text-align: center;
`

const Text = styled(Typography)`
   font-size: 14px;
   font-weight: bold;
   font-family: inharit;
`

const NavBar = () => {
  return (
    <Box style={{background: '#fff'}}>
    <Component>
      {navData.map((data) => (
        <Container>
          <img id={data.id} src={data.url} alt="Nav" style={{width:64}} />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Component>
    </Box>
  );
};

export default NavBar;
