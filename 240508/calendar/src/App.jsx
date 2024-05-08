import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="bg-red-50 min-h-screen flex justify-center items-center flex-col gap-8">
 <h1 className="text-4xl font-bold bg-blue-200 w-[936px]">2024, May</h1>      <Calendar></Calendar>
    </div>
  );
};

export default App;