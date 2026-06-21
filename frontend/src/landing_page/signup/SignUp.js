import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";// used for error handling client side

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/signup", 
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, user } = data;//data is fetched from the POST request
      if (success) {
        handleSuccess(message);

        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", "authenticated");

        setTimeout(() => {
          // Redirect to dashboard application (running on port 3001)
          window.location.href = "http://localhost:3001";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Signup error:", error);
      handleError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="text-center mb-4">
            <h2 className="mb-3">Sign up now</h2>
            <p className="text-muted">Or track your existing application.</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border p-4 rounded shadow-sm"
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 mb-3"
              disabled={isSubmitting}
              style={{ backgroundColor: "#387ED1" }}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Creating Account...
                </>
              ) : (
                "Continue"
              )}
            </button>

            <div className="text-center">
              <small className="text-muted">
                Already have an account?
                <Link
                  to="/login"
                  className="text-decoration-none ms-1"
                  style={{ color: "#387ED1" }}
                >
                  Login
                </Link>
              </small>
            </div>
          </form>
          <ToastContainer /> 
        </div>
      </div>
    </div>
  );
};

export default Signup;
