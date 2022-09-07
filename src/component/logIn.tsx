import { Button, Input, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;

interface LogInProps {}

function LogIn({}: LogInProps) {
  const [userName, setUserName] = useState<string | undefined>();
  const [logInDisabled, setLogInDisabled] = useState<boolean>(true);

  const goToMainPage = () => {
    console.log("jump to register credit card page");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    setLogInDisabled(!Boolean(e.target.value));
  };

  return (
    <div className="login-container">
      <Title className="asb-logo">ASB</Title>
      <Input
        status={logInDisabled ? "warning" : ""}
        value={userName}
        onChange={handleNameChange}
        placeholder="Name"
      />
      <Button
        className="margin-top-20px"
        disabled={logInDisabled}
        type="primary"
        onClick={goToMainPage}
      >
        <Link to="/main">Log in</Link>
      </Button>
    </div>
  );
}

export default LogIn;
