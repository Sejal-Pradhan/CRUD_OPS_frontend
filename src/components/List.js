import React from 'react'
import axios from "axios";
import { baseURL } from '../utils/constant';

import { BsTrash } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';


const List = ({id, task,setUpdateUI, updateMode, }) => {

    const removeTask = () => {
        axios.delete(`${baseURL}/delete/${id}`).then((res) => {
            console.log(res);
            setUpdateUI((prevState) => !prevState);
        });
    };

  return (
    <li>
      {task}
      <div className="icon_holder">
        <div className="tooltip">
          <BiEditAlt className="icon" onClick={() => updateMode(id, task)} />
          <span className="tooltiptext">Edit Task</span>
        </div>
        <div className="tooltip">
          <BsTrash className="icon" onClick={removeTask} />
          <span className="tooltiptext">Delete Task</span>
        </div>
      </div>
    </li>
  );
}

export default List
