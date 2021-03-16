import Tasks from "./components/Tasks"
import Header from "./components/Header"
import {useState} from "react"
const App=()=> {  
  const [tasks, setTask] = useState(
    [
        {
            id:1,
            text:"hello",
        },
        {
            id:2,
            text:"man",
        },
        {
            id:3,
            text:"there",
        },
    ]
)
  return (
    <div className="container">
      <Header/> 
      <Tasks tasks={tasks}/>        
    </div>
  );
}

export default App;
