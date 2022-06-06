import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { addCurrencies, quickAccessFunction } from '../../redux/actions';
import CurrenciesButton from './CurrenciesButton';
import fetchAPI from '../../services/fetchAPI';
import images from '../../images';

function Main({
  currencies, quickAccess, expenses, dispatch, name,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (name === '') navigate('/');

    const fetchData = async () => {
      dispatch(addCurrencies(Object.keys(fetchAPI()).filter(
        (currency) => currency !== 'USDT',
      )));
    };
    fetchData();
  }, []);

  const createQuickAccess = (id) => {
    const quickAccessCopy = [...quickAccess];
    if (!quickAccessCopy.includes(id)) quickAccessCopy.unshift(id);
    if (quickAccessCopy.length > 5) quickAccessCopy.pop();
    dispatch(quickAccessFunction(quickAccessCopy));
  };

  const onClick = ({ target: { alt } }) => {
    createQuickAccess(alt);
    navigate(`/re/${alt}`);
  };

  return (
    <div>
      <p>Adicionar nova despesa:</p>
      <CurrenciesButton
        onClick={onClick}
        array={currencies}
      />
      <hr />
      <p>Acesso rápido:</p>
      <CurrenciesButton
        onClick={onClick}
        array={quickAccess}
      />
      <hr />
      <p>Despesas:</p>
      <div>
        {expenses.map(({ value, description, currency }, index) => (
          <div key={index}>
            <p>{`R$ ${Number(value).toFixed(2)}`}</p>
            <p>{description}</p>
            <img style={{ maxWidth: '35px' }} src={images[currency]} alt="currency" />
          </div>
        ))}
      </div>
    </div>
  );
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  quickAccess: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  quickAccess: state.wallet.quickAccess,
  expenses: state.wallet.expenses,
  name: state.user.name,
});

export default connect(mapStateToProps)(Main);
