import './App.css';
import React, {useState} from 'react';
import DisplayClock from './components/DisplayClock'
import ButtonComponent from './components/ButtonComponent';


const App = () => {
  const [time, setTime] = useState({
    hour: 0,
    min: 0,
    sec: 0,
    millisec: 0
  })
  const [status, setStatus] = useState(0)
  const [interv, setInterv] = useState()

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10))
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  }

  const reset = () => {
    clearInterval(interv)
    setTime({hour:0, min:0, sec:0, millisec:0});
    setStatus(0);
  }
  
  const resume = () => {start()}

  var ms= time.millisec, s = time.sec, m = time.min, h = time.hour ;
  
  const run = () => {
    if(m >= 60){
      h++;
      m=0;
    }
    if(s >= 60){
      m++;
      s=0;
    }
    if(ms >= 100){
      s++;
      ms=0;
    }
    ms++;
    return setTime({hour:h, min:m, sec:s, millisec:ms})
  }
  
  return (
    <div>
      <div className="AppName">
        <h1 className="Heading">StopWatch</h1>
      </div>
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayClock time= {time}/>
          <ButtonComponent start={start} resume = {resume} status= {status} stop= {stop} reset= {reset}/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
