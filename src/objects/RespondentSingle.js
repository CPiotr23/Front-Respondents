import React from 'react'
import DeleteRespondent from '../pages/fetches/DeleteRespondent';

export default function RespondentSingle ({currentPage, respondent, setEditable, editable}) {   
    function deleteHandler() {
        DeleteRespondent(respondent.id);
    }
    return (
        <div className="respondent">
            <div className="respondentkeys">
                    {Object.keys(respondent).map(key => <><b key={key}>{key.charAt(0).toUpperCase()+key.substring(1)}</b>:<br/></>)}
                </div>
                <div className="respondentvalues">
                    {Object.values(respondent).map(value => <>{value}<br/></>)}
                </div>
                <div className="respondentpanel">
                    <button className="btn_delete" onClick={() => deleteHandler(respondent.id)}/><br/>
                    {currentPage==='updaterespondent' ? <button className="btn_edit" onClick={() => setEditable(!editable)}/> : null}
                </div> 
        </div>
    );
}