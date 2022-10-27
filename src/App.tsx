import "./App.css";

import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Root from "./pages/root/page";

/**
 * `App` serves as a container or entry point of application.
 * @returns `ReactElement`
 */
const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
