import {useState} from 'react'
export default function RespondentFinder({submitIdValueHandler}) {
    
   const[value, setValue] = useState(null);

   function changeHandler(value) {
       setValue(value)
       console.log(value)
   }

    return (
        <div className="finder"> 
            Id input: <input type="number" onChange={(e) => changeHandler(e.target.value)}></input><br/>
            <button onClick={() => submitIdValueHandler(value)}>Confirm</button>
        </div>
    )
}