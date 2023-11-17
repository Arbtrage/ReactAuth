import React, { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { AppDispatch } from "../../store/configureStore";
import { useNavigate } from "react-router-dom";

interface LoginState {
  phoneNumber: string;
  password: string;
}
import { loginAsync, selectUserData } from "../../features/Auth/authSlice";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);
  const [loginState, setLoginState] = useState<LoginState>({
    phoneNumber: "",
    password: "",
  });
  useEffect(() => {
    if (userData.isAuthenticated) navigate("/profile");
  }, [userData.isAuthenticated, navigate]);
  const dispatch: AppDispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoginState({ ...loginState, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAsync(loginState));
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form
        className="space-y-6 flex flex-col items-center justify-center w-1/3"
        onSubmit={handleSubmit}
      >
        <div className="-space-y-px flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="tel"
            label="Phone Number"
            id="phoneNumber"
            value={loginState.phoneNumber}
            onChange={handleChange}
            isRequired={true}
          />
          <Input
            type="password"
            label="Password"
            id="password"
            value={loginState.password}
            onChange={handleChange}
            isRequired={true}
          />
        </div>
        <Button color="secondary" type="submit" className="m-auto">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
