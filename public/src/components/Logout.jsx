import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiPowerOff } from 'react-icons/bi';

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = async () => {
    // Optionally, you could call an API to handle logout on the server side
    // await axios.post('/api/logout');

    localStorage.clear();
    navigate('/login');
  };

  return (
    <Button onClick={handleClick}>
      <BiPowerOff size={20} />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff4d4d;
  border: none;
  border-radius: 25%;
  width: 38px;
  height: 35px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff1a1a;
  }
  svg {
    color: white;
  }
`;
