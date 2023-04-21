import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Story from "./pages/Story";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/story/apple" element={<Story />} />
            <Route path="/story/orange" element={<Story />} />
            <Route path="/story/peach" element={<Story />} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
