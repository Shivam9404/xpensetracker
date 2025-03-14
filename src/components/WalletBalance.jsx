// import React, { useState } from "react";

// const WalletBalance = () => {
//   const [walletBalance, setWalletBalance] = useState(5000);
//   const [expense, setExpense] = useState(0);

//   // Function to add income
//   const addBalance = () => {
//     const amount = prompt("Enter the income amount:");
//     if (amount && !isNaN(amount) && Number(amount) > 0) {
//       setWalletBalance(walletBalance + Number(amount));
//     } else {
//       alert("Please enter a valid amount.");
//     }
//   };

//   // Function to add expense
//   const addincome = () => {
//     const amount = prompt("Enter the expense amount:");
//     if (amount && !isNaN(amount) && Number(amount) > 0) {
//       if (Number(amount) > walletBalance) {
//         alert("You don't have enough balance to make this expense!");
//       } else {
//         setExpense(expense + Number(amount));
//         setWalletBalance(walletBalance - Number(amount));
//       }
//     } else {
//       alert("Please enter a valid amount.");
//     }
//   };

//   return (
//     <>
//       <div className="wallet-card">
//         <h2>
//           Wallet Balance: <span className="amount">₹{}</span>
//         </h2>
//         <button className="add-income" onClick={addBalance}>+ Add Income</button>
//       </div>

//       <div className="expense-card">
//         <h2>
//           Expenses: <span className="expense-amount">₹0</span>
//         </h2>
//         <button className="add-expense">+ Add Expense</button>
//       </div>

//       <div className="legend">
//         <span className="food">■ Food</span>
//         <span className="entertainment">■ Entertainment</span>
//         <span className="travel">■ Travel</span>
//       </div>
//     </>
//   );
// };

// export default WalletBalance;


const WalletBalance = ()=> {
  return(
    <>shivam</>
  )
};

export default WalletBalance;