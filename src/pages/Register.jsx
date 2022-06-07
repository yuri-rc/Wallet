import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense } from '../redux/actions';
import fetchAPI from '../services/fetchAPI';

function Register({ dispatch, expenses }) {
  const [fields, setFields] = useState({ value: '', description: '' });
  const [currency, setCurrency] = useState(0.00);
  const [isDisabled, setIsDisabled] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetchAPI();
      setCurrency(Number(api[id].ask).toFixed(2));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const { value, description } = fields;
    setIsDisabled(!((value.length && description.length) !== 0));
  }, [fields]);

  const handleOnChange = ({ target: { name, value } }) => {
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const { value, description } = fields;
    dispatch(addExpense({
      value: value * currency,
      description,
      currency: id,
      id: expenses.length,
    }));
    navigate('/wallet');
  };

  return (
    <form>
      <h1>Adicionar nova despesa</h1>
      <label htmlFor="value">
        {`Valor: (em ${id})`}
        <input type="number" name="value" value={fields.value} onChange={handleOnChange} />
      </label>
      <label htmlFor="description">
        Descrição:
        <input type="text" name="description" value={fields.description} onChange={handleOnChange} />
      </label>
      <p>{`Cotação aproximada: ${id} ${currency}`}</p>
      <button disabled={isDisabled} type="button" onClick={handleClick}>Adicionar</button>
    </form>
  );
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Register);
