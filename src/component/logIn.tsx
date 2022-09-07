import { Button, Input, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

interface LogInProps {
  userName: string;
  setUserName: (userName: string) => void;
}

function LogIn({ userName, setUserName }: LogInProps) {
  let navigate = useNavigate();
  const [logInDisabled, setLogInDisabled] = useState<boolean>(true);

  useEffect(() => {
    setLogInDisabled(!Boolean(userName));
  }, [userName]);

  const goToMainPage = () => {
    if (userName) {
      navigate("/main");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <div className="login-container">
      <Title className="asb-logo">ASB</Title>
      <Input
        onChange={handleNameChange}
        onPressEnter={() => goToMainPage()}
        placeholder="Name"
        value={userName}
        style={{ width: "150px" }}
      />
      <Button
        className="margin-top-20px"
        disabled={logInDisabled}
        type="primary"
        onClick={goToMainPage}
      >
        Log in
      </Button>
    </div>
  );
}

export default LogIn;
