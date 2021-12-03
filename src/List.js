import React, {useEffect} from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({updList, handleItemEdit, removeItem}) => {
  
  return(
    <div>
      {updList.map((item)=>{
        const {id, title} = item;
        return(
          <div key={id}>
            <div>
              {title}
              <button onClick={handleItemEdit}><FaEdit/></button>
              <button type="button" onClick={()=>removeItem(id)}><FaTrash /></button>
            </div>
          </div>
        )
      })}
      

    </div>
  )}

export default List
