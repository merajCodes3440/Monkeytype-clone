import { Box, TextField, Button } from "@mui/material"
import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        inputprops={{ style: { color: "red" } }}
      />
      <TextField
        variant="outlined"
        type="password"
        label="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{ style: { color: "red" } }}
        inputprops={{ style: { color: "red" } }}
      />
      <Button
        variant="contained"
        color="error"
        size="large"
        onClick={(e) => console.log(e)}
        inputprops={{ style: { color: "red" } }}
      >
        Login
      </Button>
      {/* <div><h1>{email}</h1>
        <h2>{password}</h2></div> */}
    </Box>
  );
}

export default LoginForm;
