import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistoryList.module.css';

const TransactionHistoryList = ({ type, amount, currency }) => {
  return (
    <tr className={css.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryList.prototype = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryList;
