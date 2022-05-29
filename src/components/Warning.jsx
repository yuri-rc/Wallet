import React from 'react';
import PropTypes from 'prop-types';
import { Warning } from '../style/loginStyle';

export default function WarningComponent({ field }) {
  return (
    <Warning warning={field ? 'block' : 'none'}>
      Obrigatório *
    </Warning>
  );
}

WarningComponent.propTypes = {
  field: PropTypes.bool.isRequired,
};
