import "./index.css";
import { Header } from "./containers/header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductListing } from "./containers/ProductListing";
import { ProductDetails } from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
