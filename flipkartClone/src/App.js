import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import DataProvider from "./context/DataProvider";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailView from "./components/details/DetailView";

function App() {
  return (
    <React.StrictMode>
      <DataProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 64 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<DetailView />} />
              <Route path="/cart" element={<Cart/>} />
            </Routes>
          </Box>
        </BrowserRouter>
      </DataProvider>
    </React.StrictMode>
  );
}

export default App;
