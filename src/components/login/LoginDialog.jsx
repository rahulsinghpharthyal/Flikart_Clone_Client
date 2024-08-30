import React, { useState, useContext } from "react";
import { Dialog } from "@mui/material";
import { authenticateLogin, authenticationSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subheading: "Sign up with mobile to get started",
  },
};

const signupInitialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const logininitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, setAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(logininitialValues);
  const [error, setError] = useState(false);

  const { acc, setAcc } = useContext(DataContext);

  const handleClose = () => {
    setOpen(!open);
    setAccount(accountInitialValues.login);
    setError(false);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticationSignup(signup);
    if (!response) return;
    handleClose();
    setAcc(signup.firstname);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response && response.status === 200) {
      handleClose();
      setAcc(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <div className="flex flex-col md:flex-row h-[70vh] w-[90vh] max-w-full">
          <div className="bg-[#2874f0] bg-[url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png')] bg-no-repeat bg-bottom bg-[length:85%] h-full w-full md:w-2/5 p-6 md:p-12 flex flex-col justify-start text-white">
            <h5 className="font-semibold text-lg md:text-2xl md:font-bold">
              {account.heading}
            </h5>
            <p className="mt-5 font-semibold text-sm md:text-base md:font-bold">
              {account.subheading}
            </p>
          </div>
          <div className="flex flex-col flex-1 p-4 md:p-8 justify-center space-y-6">
            {account.view === "login" ? (
              <>
                <input
                  type="text"
                  name="username"
                  onChange={onValueChange}
                  placeholder="Enter Username"
                  className="border-b-2 border-gray-300 focus:outline-none focus:border-[#2874f0] mt-5 md:mt-3 mb-5"
                />
                {error && (
                  <p className="text-[10px] text-[#ff6161] mt-2 font-semibold">
                    Please Enter valid username or password
                  </p>
                )}
                <input
                  type="password"
                  name="password"
                  onChange={onValueChange}
                  placeholder="Enter Password"
                  className="border-b-2 border-gray-300 focus:outline-none focus:border-[#2874f0] mt-5 md:mt-3"
                />
                <p className="text-xs text-gray-500 mt-5">
                  By continuing, you agree to Flipkart's Terms of Use and Privacy
                  Policy.
                </p>
                <button
                  onClick={loginUser}
                  className="bg-[#fb641b] text-white h-12 rounded-md mt-5 md:mt-3"
                >
                  Login
                </button>
                <p className="text-center mt-5 md:mt-3">OR</p>
                <button className="bg-white text-[#2874f0] h-12 rounded-md mt-5 md:mt-3 shadow-md">
                  Request OTP
                </button>
                <p
                  onClick={() => setAccount(accountInitialValues.signup)}
                  className="text-center text-[#2874f0] font-semibold mt-5 md:mt-3 cursor-pointer"
                >
                  New to Flipkart? Create an account
                </p>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="firstname"
                  onChange={onInputChange}
                  placeholder="Enter First Name"
                  className="border-b-2 border-gray-300 focus:outline-none focus:border-[#2874f0] mt-5 md:mt-3"
                />
                <input
                  type="text"
                  name="lastname"
                  onChange={onInputChange}
                  placeholder="Enter Last Name"
                  className="border-b-2 border-gray-300 focus:outline-none focus:border-[#2874f0] mt-5 md:mt-3"
                />
                <input
                  type="text"
                  name="username"
                  onChange={onInputChange}
                  placeholder="Enter Username"
                  className="border-b-2 border-gray-300 focus:outline-none focus:border-[#2874f0] mt-5 md:mt-3"
                />
                <input
                  type="email"
                  name="email"
                  onChange={onInputChange}
                  placeholder="Enter Email"
                  className="border-b-2 border-gray-300 focus:outline-none focus:border-[#2874f0] mt-5 md:mt-3"
                />
                <input
                  type="password"
                  name="password"
                  onChange={onInputChange}
                  placeholder="Enter Password"
                  className="border-b-2 border-gray-300 focus:outline-none focus:border-[#2874f0] mt-5 md:mt-3"
                />
                <input
                  type="tel"
                  name="phone"
                  onChange={onInputChange}
                  placeholder="Phone"
                  className="border-b-2 border-gray-300 focus:outline-none focus:border-[#2874f0] mt-5 md:mt-3"
                />
                <button
                  onClick={signupUser}
                  className="bg-[#fb641b] text-white h-12 rounded-md mt-5 md:mt-3"
                >
                  Continue
                </button>
              </>
            )}
          </div>
        </div>
      </Dialog>
  );
};

export default LoginDialog;
