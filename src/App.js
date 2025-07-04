import React from "react"; 
import ReactDOM from "react-dom/client";
import PageLayout from "./components/PageLayout";
import Carousel from './components/Carousel';

function App() {
  return (
    <PageLayout
      header={<h1>My Header</h1>}
      sidebar={<nav>Links</nav>}
      main={
        <section>
          <h2>Welcome to my layout</h2>
          <Carousel />
        </section>
      }
      footer={<small>&copy; 2025</small>}
    />
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

export default App;
