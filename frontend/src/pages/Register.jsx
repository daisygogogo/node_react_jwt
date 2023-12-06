import { useState,  } from 'react';
import { useNavigate} from 'react-router-dom';
import {userRegister} from '../api/auth-api.js'
import Button from '../components/Button.jsx'
import Loader from '../components/Loader';

function Register() {

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

    userRegister(inputs).then(res =>{
        console.log(res);
        navigate('/login');
    }).finally(() =>{
        setIsLoading(false);
    })
  };

  return (
    <div >
     {isLoading && <Loader />}

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
          <Button type="primary">Register</Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
