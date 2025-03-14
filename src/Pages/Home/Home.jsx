import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import TransactionList from "../../components/TransactionList/TransactionList";
import ExpenseForm from "../../components/Forms/ExpenseForm/ExpenseForm";
import Modal from "../../components/Modal/Modal";
import AddBalanceForm from "../../components/Forms/AddBalanceForm/AddBalanceForm";
import PieChart from "../../components/PieChart/PieChart";
import BarChart from "../../components/BarChart/BarChart";
import Card from "../../components/Card/Card";

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [expenseList, setExpenseList] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // Show/hide modals
  const [isOpenExpense, setIsOpenExpense] = useState(false);
  const [isOpenBalance, setIsOpenBalance] = useState(false);

  const [categorySpends, setCategorySpends] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });

  const [categoryCount, setCategoryCount] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });

  useEffect(() => {
    // Check localStorage
    const localBalance = localStorage.getItem("balance");
    if (localBalance) {
      setBalance(Number(localBalance));
    } else {
      setBalance(5000);
      localStorage.setItem("balance", 5000);
    }

    const items = JSON.parse(localStorage.getItem("expenses"));
    setExpenseList(items || []);
    setIsMounted(true);
  }, []);

  // Saving expense list in localStorage
  useEffect(() => {
    if (expenseList.length > 0 || isMounted) {
      localStorage.setItem("expenses", JSON.stringify(expenseList));
    }
  }, [expenseList]);

  // Saving balance in localStorage
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("balance", balance);
    }
  }, [balance]);

  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>

      {/* Cards and pie chart wrapper */}
      <div className={styles.cardsWrapper}>
        <Card
          title="Wallet Balance"
          money={balance}
          buttonText="+ Add Income"
          buttonType="success"
          handleClick={() => setIsOpenBalance(true)}
        />

        <Card
          title="Expenses"
          money={expense}
          buttonText="+ Add Expense"
          buttonType="failure"
          success={false}
          handleClick={() => setIsOpenExpense(true)}
        />

        <PieChart
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
          ]}
        />
      </div>

      <div className={styles.transactionsWrapper}>
        <TransactionList
          transactions={expenseList}
          editTransactions={setExpenseList}
          title="Recent Transactions"
          balance={balance}
          setBalance={setBalance}
        />

        <BarChart
          data={[
            { name: "Food", value: categoryCount.food },
            { name: "Entertainment", value: categoryCount.entertainment },
            { name: "Travel", value: categoryCount.travel },
          ]}
        />
      </div>

      <Modal isOpen={isOpenExpense} setIsOpen={setIsOpenExpense}>
        <ExpenseForm
          setIsOpen={setIsOpenExpense}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          setBalance={setBalance}
          balance={balance}
        />
      </Modal>

      <Modal isOpen={isOpenBalance} setIsOpen={setIsOpenBalance}>
        <AddBalanceForm setIsOpen={setIsOpenBalance} setBalance={setBalance} />
      </Modal>
    </div>
  );
}
