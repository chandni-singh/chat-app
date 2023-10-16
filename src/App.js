import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="486b5bf3-523d-4893-8bd0-95778532db17"
        userName="john"
        userSecret="qwerty"
      />
    </div>
  );
}

export default App;
