let state = {
	name: 'Michael',
  age: 42,
  power: 10,
  bool: true,
  arr: [
  	'one', 'two'
  ]
};

const reducer = (state, action) => {
	switch (action.type) {
    case 'GROW_OLD':
      if (state.age) {
        return {
          ...state,
          age: state.age + 1
        }
     } else {
     	return state;
     }
    case 'LOSE_POWER':
      if (state.power){
      	return {
        	...state,
          power: state.power -1
        }
      } else {
      	return state;
      }
  }  
  return state;
}

state = reducer(state, { type: 'LOSE_POWER'});
state = reducer(state, {type: 'GROW_OLD'});
console.log(state);