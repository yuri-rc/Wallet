/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

function Wallet() {
  const params = useParams();
  console.log(params);
  return (
    <h1>Register</h1>
  );
}

export default Wallet;
