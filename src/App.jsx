import blob from './assets/blob.svg'
import blob2 from './assets/blob2.svg'
import { useState } from "react";
import Header from "./components/Header";
import Playback from "./components/Playback";
import Speed from "./components/Speed";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [result, setResult] = useState({ hours: 0, minutes: 0 });

  const calculateSpeed = () => {
    let total = hours * 60 + minutes * 1;
    let newTime = total / speed;
    let resHours = Math.floor(newTime / 60);
    let resMinutes = Math.floor(newTime % 60);
    setResult((prev) => {
      return { ...prev, hours: resHours, minutes: resMinutes };
    });
  };

  return (
    <div className="App min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100">
      <div className="max-w-screen-md	mx-auto p-4 z-10 relative">
        <Header />
        <Playback setHours={setHours} setMinutes={setMinutes} />
        <Speed
          setSpeed={setSpeed}
          speed={speed}
          calculateSpeed={calculateSpeed}
        />
        <Result result={result} />
        <Footer />
      </div>
      <img src={blob} alt="" className='fixed bottom-0 left-0 h-3/6' />
      <img src={blob2} alt="" className='fixed top-0 right-0 h-3/4' />
    </div>
  );
}

export default App;
