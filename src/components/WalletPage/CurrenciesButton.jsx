import React from 'react';
import PropTypes from 'prop-types';
import images from '../../images';
import {
  WelcomeBack, UserNmae, AmoutSpent, HrElement, MainParagraph, CurrenciesDiv, CurrencysDiv,
} from '../../style/walletStyle.Style';

function CurrenciesButton({
  onClick, array,
}) {
  return (
    <CurrenciesDiv>
      { array.map((currency) => (
        <CurrencysDiv key={currency}>
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            type="button"
            onClick={onClick}
          >
            <img src={images[currency]} alt={currency} />
          </button>
          <p>{currency}</p>
        </CurrencysDiv>
      )) }
    </CurrenciesDiv>
  );
}

CurrenciesButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CurrenciesButton;
