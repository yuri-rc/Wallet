import React from 'react';
import PropTypes from 'prop-types';
import images from '../../images';

function CurrenciesButton({
  onClick, array,
}) {
  return (
    <div style={{ display: 'flex', overflow: 'auto' }}>
      { array.map((currency) => (
        <div key={currency}>
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            type="button"
            onClick={onClick}
          >
            <img src={images[currency]} alt={currency} />
          </button>
          <p>{currency}</p>
        </div>
      )) }
    </div>
  );
}

CurrenciesButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CurrenciesButton;
