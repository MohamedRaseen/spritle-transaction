
const TransactionsHistory = ({transactions}) =>{

    return(
        <div className='transactions'>
            <div className='title'><h3>Transactions:</h3></div>
            <div className='history'>
                {
                    transactions && transactions.map((trans, index) => <div key={index}>{trans}</div>)
                }
            </div>
        </div>
    )

}

export default TransactionsHistory;