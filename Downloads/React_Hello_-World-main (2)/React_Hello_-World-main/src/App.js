import React from "react"; 
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage";

function App() {
   return <HomePage />;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

export default App;

