import Timer from '../components/Timer';

const LONG_BREAK_MINS = 120
const SHORT_BREAK_MINS = 5

function App() {
  const hours = 0;
  const minutes = 5; 
  const seconds = 4

  return (
    <>
     <Timer hours={hours} minutes={minutes} seconds={seconds} />
    </> 

  )
}

export default App
