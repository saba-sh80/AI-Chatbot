import Chatbox from "./components/Chatbox";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-dvh grid grid-cols-5 grid-rows-1 justify-normal">
      <Sidebar/>
      <Chatbox />
    </div>
  );
}

export default App;
