import Accordion from "./components/Accordion/Accordion";
import "./App.css"
import { useState } from "react";
const App = () => {
  const [state,setState] = useState(false)
  return ( 
    <div className="wrapper">
      <Accordion/>
      <p onClick={()=>setState(is=>!is)} className={`text ${state ? "open" : ""}`}>hello</p>
    </div>
   );
}
 
export default App;