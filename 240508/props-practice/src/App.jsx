import Box from "./components/Box";


const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center gap-8">
      <Box name="BoxA" bgColor="bg-red-100" isRounded={false}></Box>
      <Box name="BoxB" bgColor="bg-blue-100" isRounded={false}></Box>
      <Box name="BoxC" bgColor="bg-green-100" isRounded={true}></Box>
      <Box bgColor="bg-purple-100" isRounded={true}></Box>
    </div>
  );
}
export default App;