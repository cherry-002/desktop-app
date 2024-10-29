import { Outlet } from "react-router-dom";
import "./App.css";
import MainItem from "./components/mainItem";
import Profile from "./components/profile";
import QuickStart from "./components/quickStart";
import Sidebar from "./components/sidebar";
import Statistic from "./components/statistic";
import WordSets from "./components/wordSets";

function App() {


  return (
    <main className="bg-slate-300 w-[100vw] h-[100vh]">
      <Sidebar />
      <Outlet />
    </main>
  );
}

export default App;
