import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
  const { login } = useAuth();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    await login(inputs);
    setIsLoading(false);
    navigate("/UserCenter");
  };

  return (
    <div>
      {isLoading && <Loader />}

      <div className="mb-6 text-gray-500">
        Already has an account? Please Login!
      </div>

      <form onSubmit={handleSearchSubmit}>
        <div>
          <input
            placeholder="user name"
            name="username"
            onChange={handleChange}
            className="input mb-8 mr-3 w-72"
          />
        </div>

        <div>
          <input
            placeholder="password"
            name="password"
            onChange={handleChange}
            className="input mb-8 mr-3 w-72"
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
