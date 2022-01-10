import './App.css';
import { incrementHandler } from './Redux/action';
import {useDispatch,useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const plus =()=> {
    dispatch( incrementHandler())
  }
// useSelector : to extract global state from store
// const state = useSelector((state)=>state.state)
const count = useSelector((state)=>state.counter)
  return (
    <div className="App">
      <h1>Workshop React Redux</h1>
      <div className="counter">
        <button onClick={plus} >+</button>
        <h3>{count}</h3>
        <button >-</button>
      </div>
    </div>
  );
}

export default App;
