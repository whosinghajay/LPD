import React, { Suspense, lazy } from "react";
import { BiLoader } from "react-icons/bi";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<BiLoader />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
