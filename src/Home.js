import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Welcome to Home Page</h2>

      <nav>
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/" onClick={() => {
          localStorage.removeItem("user");
        }}>Logout</Link>
      </nav>
    </div>
  );
}

export default Home;