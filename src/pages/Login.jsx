import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import WalletImage from '../img/Wallet-pana.svg';
import {
  Title, Image, Container, MainContainer,
} from '../style/loginStyle';
import { addUser } from '../redux/actions';
import WarningComponent from '../components/Warning';

function Login(props) {
  const [fields, setFields] = useState({ name: '', pass: '' });
  const [warning, setWarning] = useState({ name: true, pass: true });

  useEffect(() => {
    setWarning({
      name: fields.name === '',
      pass: fields.pass === '',
    });
  }, [fields.name === '', fields.pass === '']);

  const navigate = useNavigate();
  const redirect = () => {
    const { dispatch } = props;
    dispatch(addUser(fields.name));
    navigate('/wallet');
  };

  const onChange = ({ target: { name, value } }) => {
    setFields({ ...fields, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if ((warning.name || warning.pass) === false) redirect();
  };

  return (
    <MainContainer>
      <Title>Trybe-wallet</Title>
      <Image src={WalletImage} alt="" />
      <Container autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="name">
          Nome:
          <WarningComponent field={warning.name} />
          <input type="text" name="name" onChange={onChange} />
        </label>
        <label htmlFor="password">
          Senha:
          <WarningComponent field={warning.pass} />
          <input type="password" name="pass" onChange={onChange} />
        </label>
        <button type="submit">Entrar</button>
      </Container>
    </MainContainer>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
