import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, quickAccessFunction } from '../../redux/actions';
import CurrenciesButton from './CurrenciesButton';

function Main({
  currencies, quickAccess, expenses, dispatch,
}) {
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAPI());
    };
    fetchData();
  }, []);

  const createQuickAccess = (id) => {
    const quickAccessCopy = [...quickAccess];
    if (!quickAccessCopy.includes(id)) quickAccessCopy.unshift(id);
    if (quickAccessCopy.length > 5) quickAccessCopy.pop();
    dispatch(quickAccessFunction(quickAccessCopy));
  };

  const navigate = useNavigate();

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
        {expenses.map(({ value, description }, index) => (
          <div key={index}>
            <p>{value}</p>
            <p>{description}</p>
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
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  quickAccess: state.wallet.quickAccess,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Main);
