import {useState} from 'react'
export default function RespondentFinder({submitIdValueHandler}) {
    
   const[value, setValue] = useState(null);

   function changeHandler(value) {
       setValue(value)
   }

    return (
        <div className="finder"> 
            Enter id of respondent to edit:<br/>
            <b>Id input:</b><input type="number" onChange={(e) => changeHandler(e.target.value)}></input><br/>
            <button onClick={() => submitIdValueHandler(value)}>Confirm</button>
        </div>
    )
}