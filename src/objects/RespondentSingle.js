import React from 'react'
import DeleteRespondent from '../pages/fetches/DeleteRespondent';

export default function RespondentSingle ({currentPage, respondent, setEditable, editable, confirmHandler, setNewRespondent, setAddedRespondent}) {   
    function deleteHandler() {
        DeleteRespondent(respondent.id);
    }


    return (
        <div className="respondent">
            <div className="respondentkeys">
                    {Object.keys(respondent).map(key => <React.Fragment key={key}><b key={key}>{key.charAt(0).toUpperCase()+key.substring(1)}</b>:<br/></React.Fragment>)}
                </div>
                <div className="respondentvalues">
                    {Object.entries(respondent).map(obj => <React.Fragment key={obj[0]}>{obj[1]}<br/></React.Fragment>)}
                </div>
                <div className="respondentpanel">
                    <button className="btn_delete" onClick={() => deleteHandler(respondent.id)}/><br/>
                    {currentPage==='update' ? <button className="btn_edit" onClick={() => setEditable(!editable)}/> : null}
                    {currentPage==='add' ? <button className="btn_confirm" onClick={() => confirmHandler({setNewRespondent, setAddedRespondent})} /> : null}
                </div> 
        </div>
    );
}