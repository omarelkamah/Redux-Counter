import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { increase, decrease } from "./store/index";

function App() {
  const value = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <p>Counter: {value.value}</p>
      <button className="increase" onClick={() => dispatch(increase(1))}>
        Increase +
      </button>
      <button
        disabled={value.value === 0 ? true : false}
        className="decrease"
        onClick={() => dispatch(decrease(1))}
      >
        decrease -
      </button>
    </div>
  );
}

export default App;
