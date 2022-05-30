import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../../redux/actions';
import images from '../../images';

function WalletHeader({
  name, expenses, currencies, dispatch,
}) {
  const transformCurrencies = () => (
    Object.keys(currencies).filter(
      (currency) => currency !== 'USDT',
    )
  );

  console.log(currencies);

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
        {/* ===================== */}
        <p>Adicionar nova despesa:</p>
        <div style={{ display: 'flex', overflow: 'auto' }}>
          { transformCurrencies().map((currency) => (
            <div key={currency}>
              <button type="button">
                <img src={images[currency]} alt={currency} />
              </button>
              <p>{currency}</p>
            </div>
          )) }
        </div>
        <hr />
        <p>Acesso rápido:</p>
        <h1 style={{ color: 'red' }}>TIRAR COISAS Q NÃO SÃO DO HEADER</h1>
        {/* ===================== */}
      </div>
    </header>
  );
}

WalletHeader.propTypes = {
  name: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currencies: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletHeader);
