import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    if (!replace) {
      setHistory((prev) => ([...prev, mode]));
    }
    return setMode(mode);
  }

  const back = () => {
    if (history.length > 1) {
      history.pop()
      return setMode(history[history.length - 1])
    } 
  }

  return { mode, transition, back };
}

// const transition = function (newMode) {
//   const newHistory = [...history];
//   newHistory.push(mode)
//   setHistory(newHistory)
//   setMode(newMode)
// }