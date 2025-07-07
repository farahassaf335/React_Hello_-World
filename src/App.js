import React from "react"; 
import ReactDOM from "react-dom/client";


import PageLayout from "./components/PageLayout";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import HomePage from "./components/HomePage";

function App() {
  //
  // <PageLayout
  //   header={<Header />}
  //   sidebar={<nav>Links</nav>}
  //   main={
  //     <section>
  //       <h2>Welcome to my layout</h2>
  //       <Carousel />
  //     </section>
  //   }
  //   footer={<small>&copy; 2025</small>}
  // />
  //
  return <HomePage />;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

export default App;
