import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Transaction from './components/Transaction';
import TransactionHistory from './components/TransactionsHistory';

const App = () =>{

  const dispatch = useDispatch(), transactions = useSelector(state => state.transactions);

  const updateTransaction = (amount, type, date) =>{
    let transaction = `${date.toISOString()} - ${amount} - ${type}`;
    let action = { type, transaction, amount };
    dispatch(action);
  }

  return (
    <div className="App">
      <div className='app-container'>
        <div className='title'><h1>Expense Tracker - Basic</h1></div>
        <Transaction onSubmit={updateTransaction}/>
        <TransactionHistory transactions={transactions}/>
      </div>
    </div>
  );
}

export default App;
