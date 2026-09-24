
import {useState, useEffect} from "react"
import "./index.css";

export default function App() {
  const [toggle, setToggle] = useState(false)
  

  useEffect(function () {
    const intervalID = setInterval(function(){
      if(toggle){
        document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      }
    },2000)

    return function(){
      clearInterval(intervalID)
    }
  }, [toggle]);

  const handleToggle = function () {
    setToggle(function (prevToggle) {
      return !prevToggle;
    });
  };

  return (
    <div id="toggle">
      <button onClick={handleToggle}>
        {toggle ? "Stop" : "Start"} Color Changing
      </button>
    </div>
  );
}
