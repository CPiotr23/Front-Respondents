import React, {useState} from 'react'
import axios from 'axios'
import RespondentEditer from './RespondentEditer'

export default function RespondentSingle (props) {
    
    const [editable, setEditable] = useState(false)

    function deleteHandler(e) {
        e.preventDefault()
        axios
            .delete("http://localhost:8080/respondents/delete/"+props.respondent.id)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
    if(editable===false) {
    return (
        <div className="respondent"> 
            {console.log(editable)}
            Id: {props.respondent.id}<button className="btn_delete" onClick={(e) => deleteHandler(e)}/>{props.currentPage==='updaterespondent' ? <button className="btn_edit" onClick={() => setEditable(!editable)}/> : ''}<br/>
            Gender: {props.respondent.gender}<br />
            Age: {props.respondent.age}<br/>
            Income: {props.respondent.income}<br/> 
            Kids: {props.respondent.kids}<br/>
            ownHome: {props.respondent.ownHome}<br/>
            subscribe: {props.respondent.subscribe}<br/> 
            segment: {props.respondent.segment}<br/>
        </div>
    );
    }
    else return (
        <RespondentEditer respondent={props.respondent}/>
    );
}