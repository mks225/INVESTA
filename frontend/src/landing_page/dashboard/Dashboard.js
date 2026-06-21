import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3002/auth/verify",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);
        setLoading(false);

        if (status) {
          toast(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Verification error:", error);
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast("Logged out successfully", {
      position: "top-right",
    });
    navigate("/signup");
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Verifying authentication...</p>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body text-center p-5">
                <h2 className="mb-4">Welcome to Zerodha Dashboard</h2>
                <h4 className="text-primary mb-4">
                  Hello, <span className="fw-bold">{username}</span>!
                </h4>
                <p className="text-muted mb-4">
                  You have successfully logged into your Zerodha account. Start
                  trading and managing your portfolio.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <button
                    className="btn btn-primary me-md-2"
                    onClick={() => navigate("/holdings")}
                  >
                    View Holdings
                  </button>
                  <button
                    className="btn btn-outline-primary me-md-2"
                    onClick={() => navigate("/orders")}
                  >
                    My Orders
                  </button>
                  <button className="btn btn-outline-danger" onClick={Logout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;
