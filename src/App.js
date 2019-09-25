import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button'
import NextIcon from '@material-ui/icons/NavigateNext';
import './App.css';

function App() {
  let date = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 39) {
        date.setDate(date.getDate() + count + 1)
        setCount(count + 1)
      } else {
        date.setDate(date.getDate() + count - 1)
        setCount(count - 1)
      }
      setWaktu({
        days: days[date.getDay()],
        dates: date.getDate(),
        months: months[date.getMonth()],
        years: date.getFullYear(),
      })
    })
  }, [])
  
  const [count, setCount] = useState(0);
  const [waktu, setWaktu] = useState({
    days: days[date.getDay()],
    dates: letakNol(date.getDate()),
    months: months[date.getMonth()],
    years: date.getFullYear(),
  })

  function letakNol(i){
    if(i < 10){i = "0" + i};
  return i;
  }

  function onButtonClick(event) {
    const target = event.currentTarget.innerText.toLowerCase();
    if (target === 'next day') {
      date.setDate(date.getDate() + count + 1)
      setCount(count + 1)
    } else if (target === 'previous day'){
      date.setDate(date.getDate() + count - 1)
      setCount(count - 1)
    } else {
      date.setDate(date.getDate())
      setCount(0)
    }
    setWaktu({
      days: days[date.getDay()],
      dates: date.getDate(),
      months: months[date.getMonth()],
      years: date.getFullYear(),
    })
  }

  return (
    <div className="App">
      <div className="card">
          <p className="title">{waktu.days}</p>
          <p className="date"><span className="dates">{letakNol(waktu.dates)}</span><span><span>{waktu.months}</span><span>{waktu.years}</span></span></p>
          <p className="footer">Darwin's Calender</p>
      </div>
      <div>
        <Button onClick={onButtonClick} variant="outlined" color="secondary" className="btn">
          <NextIcon className="rotate-180"/>
          Previous Day
        </Button>
        { (waktu.dates !== date.getDate() || waktu.months !== months[date.getMonth()])
        && <Button onClick={onButtonClick} variant="outlined" color="inherit"  className="btn">
            Today
            <NextIcon className="todayButton"/>
          </Button>
        }
        <Button onClick={onButtonClick} variant="outlined" color="primary"  className="btn">
          Next Day
          <NextIcon/>
        </Button>
      </div>
    </div>
  );
}

export default App;
