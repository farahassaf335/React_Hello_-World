import React from "react";
import ReactDOM from "react-dom/client";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <PageLayout
      header={<h1>My Header</h1>}
      sidebar={<nav>Links</nav>}
      main={<section>Welcome to my layout</section>}
      footer={<small>&copy; 2025</small>}
    />
  );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

export default App;

