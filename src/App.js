import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const theValue = useSelector((count) => {
    if (count.value < 1) {
      return (count = "No Value");
    }
    return count.value;
  });

  const increase = () => {
    const action = { type: "increase", payload: 1 };
    dispatch(action);
  };
  const decrease = () => {
    const action = { type: "decrease", payload: 1 };
    dispatch(action);
  };
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <p>Counter: {theValue}</p>
      <button onClick={increase}>Increase +</button>
      <button onClick={decrease}>decrease -</button>
    </div>
  );
}

export default App;
