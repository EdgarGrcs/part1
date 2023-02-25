import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  
  const points = [0,0,0,0,0,0,0,0];


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  const [best, setBest] = useState(0);

  


 const handlePoints = () => {
    const copy = [...votes];
    copy[selected] += 1;
    let arr = [...copy];
    setVotes(copy);
    let highest = getMostVotedAnecdote(arr);
    setBest(highest);
    
 }
 

  const generateNumber = () => {
    let number = Math.floor((Math.random() * 8) +0);

    return setSelected(number);
  }

  const getMostVotedAnecdote = (array) => {
   const arr = array.indexOf(Math.max(...array)); 
   return arr;
  }
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>has { votes[selected]} {votes[selected] === 1 ? "vote" : "votes" }</div>
      <div>
      <button onClick={() => handlePoints()}>vote</button>
      <button onClick={() => generateNumber()}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[best]} 
      <div>has { votes[best]} {votes[best] === 1 ? "vote" : "votes" }</div>
    </div>
  )
}

export default App