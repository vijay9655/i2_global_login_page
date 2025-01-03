
import React,{useState} from 'react'
import { CustomBreadcrumbs } from '../common/CustomBreadcrumbs'
import Notes from '../common/task/Notes';
import { useSelector,useDispatch} from 'react-redux';
import { ADD_NOTES } from '../../reducers/userReducers';
import { Onsave } from '../Actions/Onsave';

import { v4 as uuidv4 } from 'uuid';
import { user } from '@nextui-org/react';
const generateUniqueId = () => {
  return uuidv4();  // Generates a unique UUID
};
function Home(props) {
  // var count=0;
  const users = useSelector((state) => state); // Access state from Redux
const dispatch=useDispatch();


    const [modalstatus,setModalstatus]=useState(true)
    const [content, setContent] = useState("");
    const [id, setId] = useState(0);

    const [task, setTask] = useState("");
    const [existdata, setExistdata] = useState("");

    const handleChange = (e,type) => {

      switch (type) {
        case "task":
            setTask(e.target.value);
            break;
        case "content":      
            setContent(e.target.value);
            break;
        default:
            break;
      }
      // setContent(e.target.value);
    };
   const onSave =(data,btn)=>{

    switch (btn) {
      case "Add":
        Onsave(data,btn,dispatch,task,content,generateUniqueId())
        onClose();
        
        break;
      case "Update":
        Onsave(data,btn,task,content,generateUniqueId());
        break;
    
      default:
        break;
    }
   }

    const onClose=()=>{
        
setModalstatus(false)
    }

  return (
    <div>
        <CustomBreadcrumbs items={["Home","Your Notes"]} />

        <h1 style={{padding:"5% 0% 2% 5%",fontSize:"30px",fontWeight:"900"}}>{`${props.props.day} ${props.name[0]?.data.name}!`}</h1>

        <Notes dispatch={dispatch} onClose={onClose}  isOpen={modalstatus} handleChange={handleChange} content={content} task={task} onSave={onSave}/>
        <div className="flex flex-wrap justify-between">
  {users && users?.users.map((e, index) => {
    if (e.notebook !== null && e.notebook) {
      return (
        <div key={index} className="p-4 w-full sm:w-2/5 lg:w-1/3 xl:w-1/4 bg-gray-300">
          <p style={{borderBottom:"2px solid black"}} className="w-full bg-white h-10 p-4 overflow-hidden">{e.notebook.task}</p>
          <p className="w-full bg-white h-40 p-4 overflow-hidden">{e.notebook.content}</p>
        
        </div>
      );
    }
  })}
</div>



   <div className="fixed bottom-4 right-4 space-x-4">
      <a onClick={()=>setModalstatus(true)} href="#" className="text-white text-3xl p-2 bg-blue-600 rounded-full hover:bg-blue-700">
         create    </a>
      </div>
    </div>
  )
}

export default Home