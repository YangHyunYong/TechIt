import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ChatList from "./pages/ChatList";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat-list" element={<ChatList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
