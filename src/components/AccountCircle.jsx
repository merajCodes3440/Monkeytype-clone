import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Modal, AppBar, Tabs, Tab } from "@mui/material";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function AccountCircle() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);

  const handlemodalopen = () => {
    setOpen(true);
  };
  const handelclose = () => {
    setOpen(false);
  };
  const handelValueChange = (e, v) => {
    setValue(v);
  };

  return (
    <div>
      <div>
        <AccountCircleIcon onClick={handlemodalopen} />
      </div>
      <Modal
        open={open}
        onClose={handelclose}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div style={{ width: "400px" }}>
          <AppBar position="static">
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handelValueChange}
            >
              <Tab label="signup" style={{ color: "white" }} value={1} />
              <Tab label="login" style={{ color: "white" }} value={2} />
            </Tabs>
          </AppBar>
          {value === 1 && <LoginForm />}
          {value === 2 && <SignupForm />}
        </div>
      </Modal>
    </div>
  );
}

export default AccountCircle;
