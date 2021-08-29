import RespondentFinder from '../objects/RespondentFinder'
import axios from "axios";
import React, {useEffect, useState} from "react";
import FindRespondent from "./fetches/FindRespondent"

export default function UpdateRespondent(props) {

    
    const [id, setId] = useState(null)
    const [respondent, setRespondent] = useState(null)

    function buttonHandler(value) {
        if(value!=='') {
            setId(value)
        }
        else setRespondent('')
    }

    useEffect(() => {
        if(id!==null && id!==''){ 
            axios.get("http://localhost:8080/respondents/findById/"+id)
            .then((response) => {
                setRespondent(response.data)
            })
        }
    }, [id])

    return (
        <div className="mainBody">
            <RespondentFinder/>
            <FindRespondent currentPage={props.currentPage} respondent={respondent} id={id} buttonHandler={buttonHandler}/>
        </div>
      );
}