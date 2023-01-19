import "./App.css";

const App = () => {
  const test = () => console.log("test");

  return <button onClick={test}>Click me to log</button>;
};

export default App;
