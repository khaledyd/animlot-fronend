import React from "react";
import { borderColor, Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import Nav from "./../components/home/Nav";
import { useState } from "react";
import {axiosInstance} from "../config"
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate();
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      confirmPassword,
      fullname,
    };
    try {
      const res = await axiosInstance.post("/auth/signup", data);

    } catch (err) {
    
    }
  };

  return (
    <Box>
      <Nav />
      <Box
        sx={{
          marginTop: "5%",
          width: "100%",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          sx={{
            width: "50%",
            marginLeft: { lg: "20%", md: "20", sm: "15%", xs: "15%" },
            backgroundColor: "#FCFCFC",
            padding: "100px 60px",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#F35588",
            }}
          >
            Log in
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              width: "100%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Fullname"
              type={"email"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              onChange={(e)=> setfullname(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              type={"email"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type={"password"}
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              type={"password"}
              label="confirm password"
              variant="outlined"
              sx={{
                width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                marginTop: "10px",
              }}
              onChange={(e)=> setConfirmPassword(e.target.value)}
            />
            <Box
              sx={{
                width: "50%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  marginTop: "10px",
                  backgroundColor: "#F35588",
                }}
                onClick={handlesubmit}

              >
    sign Up
              </Button>
              <Box
                justifyContent={"flex-start"}
                sx={{
                  marginLeft: "-70px",
                }}
              >
                <Typography
                  sx={{
                    color: "#F35588",
                  }}
                  onClick = {()=>navigate("/login")}
                >
               Log in
                </Typography>
                <Typography
                  sx={{
                    color: "#F35588",
                  }}
                  onClick = {()=>navigate("/ForgetPassword")}
                >
                  Forget Password
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
