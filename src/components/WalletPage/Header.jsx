import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../../redux/actions';
import {
  WelcomeBack, UserNmae, AmoutSpent, HrElement,
} from '../../style/walletStyle.Style';

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
      <WelcomeBack>Bem-vindo de volta</WelcomeBack>
      <UserNmae>{ name }</UserNmae>
      <AmoutSpent>
        <h2>VALOR GASTO:</h2>
        <p>
          R$
          {' '}
          {expenses.length === 0 && '0,00' }
        </p>
      </AmoutSpent>
      <HrElement />

    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
