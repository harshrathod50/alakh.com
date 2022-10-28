import "./App.css";

import type { FC } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loader from "./components/loader/Loader";

const Root = lazy(() => import("./pages/root/page"));

/**
 * `App` serves as a container or entry point of application.
 * @returns `ReactElement`
 */
const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<Root />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
