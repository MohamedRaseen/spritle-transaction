import { useState } from 'react';
import { useSelector } from 'react-redux';
import appConstants from '../static/static';

const Transaction = (props) =>{

    const { onSubmit } = props || {};

    const [amount, setAmount] = useState(), [showMinAmount, setShowMinAmount] = useState({show: false});

    const balance = useSelector(state => state.balance);


    const validateAmount = (type) =>{

        let transactionAmount = Number(amount);

        if((type === appConstants.REMOVE_TRANSACTION) && (transactionAmount > balance)){
            setShowMinAmount({show: true, msg: appConstants.NO_AMOUNT})
            return;
        }

        if(transactionAmount >= 10){
            onSubmit(transactionAmount, type , new Date());
            setShowMinAmount({show: false});
            setAmount();
        }
        else
            setShowMinAmount({show: true, msg : appConstants.MIN_AMOUNT});
    }

    return(
        <div className='transaction-container'>
            <div className='balance'>Balance : {balance}</div>
            { showMinAmount.show && <div className='user-info'>{showMinAmount.msg}</div>}
            <div className='amount'>
                <input type='number' min='10' step='10' value={amount || ''} onChange={(e) => {setAmount(e.target.value)}}/>
            </div>
            <div className='submit'>
                <button onClick={() => validateAmount(appConstants.ADD_TRANSACTION)}>{appConstants.ADD_TRANSACTION}</button>
                <button onClick={() => validateAmount(appConstants.REMOVE_TRANSACTION)}>{appConstants.REMOVE_TRANSACTION}</button>
            </div>
        </div>
    )
}

export default Transaction;