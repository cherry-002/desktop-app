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
      <section className="main-section">
        <MainItem children={<WordSets/>}/>
        <MainItem children={<Profile/>}/>
        <MainItem children={<Statistic/>}/>
        <MainItem children={<QuickStart/>}/>
      </section>
    </main>
  );
}

export default App;
