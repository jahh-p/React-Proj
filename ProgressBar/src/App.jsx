import ProgressBar from "./ProgressBar.jsx";
import {useState} from "react";

export default function App(){
  const [progress, setProgress] = useState(0);
  return(<div><ProgressBar progress= {progress} setProgress = {setProgress}/></div>);
} 