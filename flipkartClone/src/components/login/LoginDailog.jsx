import React, { useState, useContext } from "react";
import { Box, TextField, Typography, Dialog, Button, styled} from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../../service/api";
import {DataContext} from "../../context/DataProvider";


const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 85%;
  width: 30%;
  padding: 40px;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 45px 35px;
  flex: 1;
  & > div,
  & > p,
  & > button {
    margin-top: 20px;
  }
`;

const OtpButton = styled(Button)`
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
  color: #2874f0;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your order, wishlis & Recomendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here!",
    subHeading: "Signup and you can start your shopping.",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const loginInitialValues={
  username: "",
  password: ""
}






const LoginDailog = (props) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError]= useState(false);
 

  const { setAccount }= useContext(DataContext);

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const handleClose = () => {
    props.setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if(response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onValueChange = (e)=>{
    setLogin({...login, [e.target.name]:e.target.value})
  }

  const loginUser= async()=>{
    let response= await authenticateLogin(login);
    console.log(response);
    if(response.status===200){
      handleClose();
      setAccount(response.data.data.firstname);
    }else{
      setError(true);
    }
  }



  return (
    <Dialog open={props.open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="username" label="Enter Email/Mobile Number" />
              {error && <Typography style={{color:'red',fontSize:14}}>Please enter valid username or password</Typography>}
              <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="password" label="Enter Password" />
              <Typography style={{ fontSize: "14px" }}>Random text, for agree to flipkart's term & conditions</Typography>
              <Button onClick={()=>loginUser()} style={{ background: "#FB641B", color: "#fff" }}>Login</Button>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <OtpButton>Request OTP</OtpButton>
              <Typography style={{fontSize: "16px",color: "#2874f0",textAlign: "center",cursor: "pointer"}}onClick={() => toggleSignup()}>New to Flipkart? Create an account</Typography>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" onChange={(e) => { onInputChange(e)}} name="firstname" label="First Name"/>
              <TextField variant="standard" onChange={(e) => { onInputChange(e)}} name="lastname" label="Last Name"/>
              <TextField variant="standard" onChange={(e) => { onInputChange(e)}} name="username" label="User Name"/>
              <TextField variant="standard" onChange={(e) => { onInputChange(e)}} name="email" label="Email"/>
              <TextField variant="standard" onChange={(e) => { onInputChange(e)}} name="password" label="Password"/>
              <TextField variant="standard" onChange={(e) => { onInputChange(e)}} name="phone" label="Phone"/>
              <OtpButton onClick={() => signupUser()}>Continue</OtpButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDailog;
