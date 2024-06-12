import './App.css';
import AnalysisDashBoard from './components/AnalysisDashBoard';
import Pricing from './components/Pricing';
import YourResearch from './components/YourResearch';
import bgBackground from "./assets/images/png/body-bg.png"

function App() {
  return (
    <div className="relative z-[1]">
      <AnalysisDashBoard />
      <Pricing />
      <YourResearch />
      <img
        src={bgBackground}
        className=" absolute max-w-[1200px] pointer-events-none max-h-[2135px] object-cover mx-auto inset-0 z-[-1] w-full"
        alt="greenChat"
      />
    </div>
  );
}

export default App;
