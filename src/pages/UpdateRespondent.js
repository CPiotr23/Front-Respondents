import RespondentFinder from '../objects/RespondentFinder'
import React, {useEffect, useState} from "react";
import FindRespondent from './fetches/FindRespondent'
import RespondentEditer from '../objects/RespondentEditer'
export default function UpdateRespondent(props) {

    const [id, setId] = useState(null);
    const [respondent, setRespondent] = useState(null);

    function submitIdValueHandler(value) {
        setId(value);
    }

    useEffect(() => {
        console.log(id)
        if(id!==null && id!=='') {
         FindRespondent({id, setRespondent})  
        }
        else setRespondent(null)
    },[id])


    return (
        <div className="mainBody">
            <RespondentFinder submitIdValueHandler={submitIdValueHandler}/>
            {respondent!==null && id!=='' ? <RespondentEditer respondent={respondent}/> : 'Respondent with given ID weren\'t found'}
        </div>
    );
}