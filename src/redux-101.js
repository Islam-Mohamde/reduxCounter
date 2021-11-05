import {createStore} from 'redux';




const decrementCount = (({decrement = 1 } = {}) => {
  decrement
})














const store = createStore((state ={counter=0}, action) => {



  const counter = state.count = 0;
switch (action.type) {

  case 'INCREMENT':
  const incrementBy = typeof action.incrementBy ===
  'number' ? action.incrementBy : 1
    return counter = state.counter + incrementBy
   
case 'DECREMENT': 
return counter = state.counter -1
case 'RESET':
return counter = 0
  default:
    return state;
}
});


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

})

store.dispatch({
  type: 'INCREMENT',
  incrementBy : 5
})
store.dispatch({
  type: 'INCREMENT'
})
store.dispatch({
  type: "RESET"
})
store.dispatch(decrementCount(decrement: 10))
