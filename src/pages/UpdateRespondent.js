import RespondentFinder from '../objects/RespondentFinder'
import React, {useEffect, useState} from "react";
import FindRespondent from './fetches/FindRespondent'
import RespondentSingle from '../objects/RespondentSingle'
import RespondentEditer from '../objects/RespondentEditer'

export default function UpdateRespondent() {

    const [id, setId] = useState(null);
    const [respondent, setRespondent] = useState(null);
    const [editable, setEditable] = useState(false);

    function submitIdValueHandler(value) {
        if(value!=='') {
            setId(value);
        }
        else {
            setId('');
        }
        setEditable(false);
    }

    useEffect(() => {
        if(id!==null && id!=='') {
         FindRespondent({id, setRespondent}) 
        }
        else setRespondent(null)
    },[id])
        return (
            <div className="mainBody">
                <RespondentFinder submitIdValueHandler={submitIdValueHandler}/>
                {id==='' ? 'Insert id value!' : null}
                {id!==null && id!=='' && respondent===null ? 'Respondent with given id werent found!' : null}
                {respondent!==null ? 
                (editable===false ? 
                <RespondentSingle currentPage='update' respondent={respondent} editable={editable} setEditable={setEditable}/> 
                :<RespondentEditer respondent={respondent} editable={editable} setEditable={setEditable} setRespondent={setRespondent}/>) 
                :null}
            </div>
        );
}