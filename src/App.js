import "./styles.css";
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './action'




export default function App() {
    const counter = useSelector((state) => state.myCounter)
    const logged = useSelector((state) => state.myLogged)
    const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>

      <h2>isLogged: {logged} </h2>
      {logged ? 'state its true' : 'state its false'}
    </div>
  );
}
