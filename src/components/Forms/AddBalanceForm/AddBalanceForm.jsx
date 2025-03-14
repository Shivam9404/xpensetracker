import styles from './AddBalanceForm.module.css';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import Button from '../../Button/Button.jsx';

export default function AddBalanceForm({ setIsOpen, addBalance }) {
  const { enqueueSnackbar } = useSnackbar();
  const [income, setIncome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!income || Number(income) < 1) {
      enqueueSnackbar('Please enter a valid amount.', { variant: 'error' });
      return;
    }

    addBalance(Number(income));
    enqueueSnackbar('Balance added successfully!', { variant: 'success' });

    setIsOpen(false);
    setIncome('');
  };

  return (
    <div className={styles.formWrapper}>
      <h3>Add Balance</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Income Amount"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <Button type="submit">Add</Button>
        <Button styleType="secondary" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </form>
    </div>
  );
}
