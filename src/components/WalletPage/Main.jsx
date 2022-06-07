import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { addCurrencies, quickAccessFunction } from '../../redux/actions';
import CurrenciesButton from './CurrenciesButton';
import fetchAPI from '../../services/fetchAPI';
import images from '../../images';
import {
  HrElement, MainParagraph, ExpenseDiv, ExpenseValue,
} from '../../style/walletStyle.Style';

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
      <MainParagraph>Selecione uma nova despesa:</MainParagraph>
      <CurrenciesButton
        onClick={onClick}
        array={currencies}
      />
      { quickAccess.length !== 0 && (
        <>
          <HrElement />
          <MainParagraph>Acesso rápido:</MainParagraph>
          <CurrenciesButton
            onClick={onClick}
            array={quickAccess}
          />
          <HrElement />
          <MainParagraph>Despesas:</MainParagraph>
          {expenses.map(({ value, description, currency }, index) => (
            <ExpenseDiv key={index}>
              <div>
                <ExpenseValue>{`R$ ${Number(value).toFixed(2)}`}</ExpenseValue>
                <p>{description}</p>
              </div>
              <img style={{ maxWidth: '35px' }} src={images[currency]} alt="currency" />
            </ExpenseDiv>
          ))}
        </>
      ) }

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
