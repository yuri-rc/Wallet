import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../../redux/actions';

function Header({
  name, expenses, dispatch,
}) {
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAPI());
    };
    fetchData();
  }, []);

  return (
    <header>
      <p>Bem-vindo de volta</p>
      <h2>{ name }</h2>
      <div>
        <p>VALOR GASTO:</p>
        <p>
          R$
          {' '}
          {expenses.length === 0 && '0,00' }
        </p>
        <hr />
      </div>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // currencies: PropTypes.arrayOf.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
