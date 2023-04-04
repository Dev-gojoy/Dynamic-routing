import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dr from "./pages/dr";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center items-center min-h-screen bg-red-100">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dr/:drID" element={<Dr />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
