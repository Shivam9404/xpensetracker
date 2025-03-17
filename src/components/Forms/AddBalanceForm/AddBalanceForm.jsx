import styles from './AddBalanceForm.module.css';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import Button from '../../Button/Button.jsx';

export default function AddBalanceForm({ setIsOpen, setBalance }) {
  const { enqueueSnackbar } = useSnackbar();
  const [income, setIncome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!income || Number(income) <= 0) {
      enqueueSnackbar('Income should be greater than zero', { variant: 'warning' });
      return;
    }

    setBalance((prev) => prev + Number(income));
    setIsOpen(false);
  };

  return (
    <div className={styles.formWrapper}>
      <h3>Add Balance</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Income Amount"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value) || '')}
        />
        <Button type="submit" style="primary" shadow>
          Add Balance
        </Button>
        <Button style="secondary" shadow handleClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </form>
    </div>
  );
}
