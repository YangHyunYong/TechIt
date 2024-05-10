import { FC } from "react";
import CardList from "./components/CardList";

const App: FC = () => {
  return (
    <div className="bg-red-100 max-w-screen-md mx-auto">
      <CardList />
    </div>
  );
};
export default App;
