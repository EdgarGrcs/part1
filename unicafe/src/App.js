import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const calculateAllFeedback = () => {
    const allFeedback = good + neutral + bad;
    
    return allFeedback;
  }


  const calculateAverage = () => {
    const total = good + neutral + bad;
    const average = (good - bad) / total;

    return average;
  }

  const positiveFeedback = () => {
    const total = good + neutral + bad;
    const posPercentage = good / total;

    return posPercentage * 100 + " %";
  }

  const countArr = [good,bad,neutral];

  if ((good || bad || neutral) === 0){
    return(
      <div>
      <h1>Give feedback</h1>
      <Button handleClick={[() => setGood(good + 1), () => setNeutral(neutral + 1), () => setBad(bad + 1)]} text = {["good","neutral","bad"]}/>
      <h1>Statistics</h1> 
      <Statistics feedback="No feedback given" count="" /> 
    </div>
    )
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={[() => setGood(good + 1), () => setNeutral(neutral + 1), () => setBad(bad + 1)]} text = {["good","neutral","bad"]}/>
      <h1>Statistics</h1> 
      <Statistics count={[good,neutral,bad,calculateAllFeedback(),calculateAverage(),positiveFeedback()]} />
    </div>
  )
}

export default App;