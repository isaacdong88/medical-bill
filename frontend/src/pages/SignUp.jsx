import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert(message);
      console.log(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const userData = {
        username,
        email,
        password,
      };
      dispatch(register(userData));
    }
    console.log(formData, "*");
  };

  return (
    <div className="login-form">
      <div className="form-register">
        <form onSubmit={handleSubmit} action="">
          <h2>Create Account</h2>
          <div>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Username"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
