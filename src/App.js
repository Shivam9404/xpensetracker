import React from "react";
import "./App.css";
import { SnackbarProvider } from 'notistack';
import Home from "./Pages/Home/Home";


// import WalletBalance from "./Components/WalletBalance";

function App() {
  return (
    // <div className="expense-container">
    //   <h1 className="title">Expense Tracker</h1>

    //   <div className="content">
    //     <div className="box-one">
    //       <div className="container">
    //       <WalletBalance />
    //       </div>
    //     </div>
    //     <div className="box-two-head">
    //       <h2>Recent Transictions</h2>
    //       <h2>Top-expenses</h2>
    //       </div>
    //     <div className="box-two">
    //       <div>
    //         <div className="recent-teransictions"></div>
    //       </div>

    //       <div>
    //         <div className="top-expenses"></div>
    //       </div>
          
    //     </div>
    //   </div>
      
    // </div>
    <SnackbarProvider >
      <div>
        <Home />
      </div>
    </SnackbarProvider>
  );
}

export default App;
