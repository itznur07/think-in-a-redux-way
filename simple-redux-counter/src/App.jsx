import Counter from "./components/Counter/Counter";
import DynamicCounter from "./components/DynamicCounter/DynamicCounter";

function App() {
  return (
    <>
      <div className='flex flex-col gap-5 items-center justify-center h-screen'>
        <Counter></Counter>
        <DynamicCounter></DynamicCounter>
      </div>
    </>
  );
}

export default App;
