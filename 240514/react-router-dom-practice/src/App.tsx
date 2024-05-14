import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import A from "./pages/a";
import Detail from "./pages/detail";
import B from "./pages/b";
import C from "./pages/c";
import Layout from "./components/Layout";
import Admin from "./components/Admin";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/a" element={<A />} />
          <Route path="/b" element={<B />} />
          <Route path="/c" element={<C />} />
          <Route path="/coin/:id" element={<Detail />} />
          <Route path="/admin/:password" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
