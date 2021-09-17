import appConstants from '../static/static';

//setting initial state
let initialState = {
   transactions: [],
   balance:0
};

const reducer = (state= initialState, action) =>{

    switch(action.type){

        case appConstants.ADD_TRANSACTION:
            return{ ...state, transactions:[...state.transactions,action.transaction], balance: (state.balance + Number(action.amount)) };
        case appConstants.REMOVE_TRANSACTION:
            return{ ...state, transactions:[...state.transactions,action.transaction], balance: (state.balance - Number(action.amount))};
        default:
            return state;
    }
}

export default reducer;