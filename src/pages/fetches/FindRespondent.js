import {useState} from 'react'
import RespondentSingle from '../../objects/RespondentSingle'
export default function FindRespondent(props) {

    const [value, setValue] = useState(null)

    if(props.respondent === null) {
    return (
        <div>
            Give an ID:<input type="number" onChange={(e) => setValue(e.target.value)}/><br />
            <button onClick={() => (props.buttonHandler(value))}>Confirm</button>
        </div>
    );
    }
    else {
    return (
        <div>
            Give an ID:<input type="number" onChange={(e) => setValue(e.target.value)}/><br />
            <button onClick={() => (props.buttonHandler(value))}>Confirm</button><br />
            {props.respondent!=='' ? <RespondentSingle key={props.respondent.id} currentPage={props.currentPage} respondent={props.respondent} /> : <p><br/>Respondent wih given ID weren't found</p>}
        </div>
    );
    }
}