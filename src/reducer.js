import { ADD, SUBTRACT } from './constants.js';
import { addSomething, subtractSomething } from './actions.js';

let state = {
    firstNum: 100,
    secondNum: 1000,
};

const reducer = (state, action) => {
    switch (action.type){
        case ADD:
            if (state.firstNum){
                let newNum = addSomething(state.firstNum);
                return {
                    ...state,
                    firstNum: newNum
                }
            } else {
                return state;
            }
        case SUBTRACT:
            if (state.secondNum){
                let newNum = subtractSomething(state.secondNum);
                return {
                    ...state,
                    secondNum: newNum
                }
            } else {
                return state;
            }  
    }
    return state;
}

state = reducer(state, { type: ADD});
state = reducer(state, {type: SUBTRACT});

console.log(state);