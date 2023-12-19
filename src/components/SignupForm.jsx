import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import {auth} from "../firebaseConfig";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword,setCpassword] =useState("");

  const handleSubmit =()=>{
     if(!email || !password || !cpassword){
        alert("Fill all the field")
        return
     }
     if(password !==cpassword){
        alert("Fill correct password")
        return
     }
    auth.createUserWithEmailAndPassword(email,password).then((res)=>{
        alert("user created")
    }).catch((error)=>{
        alert("use can't be careated")
    })

  }
  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
        InputLabelProps={{ style: { color: "red" } }}
        inputProps={{ style: { color: "red" } }}
      />
      <TextField
        variant="outlined"
        type="password"
        label="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{ style: { color: "red" } }}
        inputProps={{ style: { color: "red" } }}
      />
      <TextField
        variant="outlined"
        type="password"
        label="Enter your conform password"
        onChange={(e) => setCpassword(e.target.value)}
        InputLabelProps={{ style: { color: "green" } }}
        inputProps={{ style: { color: "red" } }}
      />
      <Button  variant="contained" size="large" onClick={handleSubmit}>
        Signup
      </Button>
    </Box>
  );
}

export default SignupForm;
