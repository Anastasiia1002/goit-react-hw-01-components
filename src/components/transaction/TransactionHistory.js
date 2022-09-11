import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryList from './TransactionHistoryList';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryList
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default TransactionHistory;
