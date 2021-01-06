import {useLocation, useNavigate} from 'react-router-dom';
import React, {useEffect,useState} from 'react';






export default function useToken(path) {
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  function getToken() {
    const tokenString = localStorage.getItem('token');
    if(!tokenString) {
      navigate("/");
    } else {
      if(path == "dashboard") {
        navigate("/dashboard");
      }
      setToken(true);
    }
  }

  useEffect(() => {
    getToken();
  }, []);

  if(!token) {
    return("");
  }
}
