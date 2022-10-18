import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

function App() {
  const TodoMainPage = React.lazy(() => import("./component/TodoMainPage"));
  const TrashPage = React.lazy(() => import("./component/TrashPage"));
  const Header = React.lazy(() => import("./component/Header"));
  const Footer = React.lazy(() => import("./component/Footer"));

  return (
    <Router>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path="/" element={<TodoMainPage />} />
          <Route path="trash" element={<TrashPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
