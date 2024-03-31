import "./App.css";

function App() {
  return (
    <div>
      <h1>Onkar tests vite</h1>
      Token : {import.meta.env.VITE_CODECOV_TOKEN}
    </div>
  );
}

export default App;
