import React from 'react'
import DeleteRespondent from '../pages/fetches/DeleteRespondent';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state'; 

export default function RespondentSingle ({currentPage, respondent, setEditable, editable, confirmHandler, setNewRespondent, setAddedRespondent}) {   
    function deleteHandler() {
        DeleteRespondent(respondent.id);
    }

    const page = useSelector((state) => state.page);
    const dispatch = useDispatch();

    const { pageMain, pageRespondents } = bindActionCreators(actionCreators, dispatch);


    return (
        <div className="respondent">
            <div className="respondentkeys">
                    {Object.keys(respondent).map(key => <React.Fragment key={key}><b key={key}>{key.charAt(0).toUpperCase()+key.substring(1)}</b>:<br/></React.Fragment>)}
                </div>
                <div className="respondentvalues">
                    {Object.entries(respondent).map(obj => <React.Fragment key={obj[0]}>{obj[1]}<br/></React.Fragment>)}
                </div>
                <div className="respondentpanel">
                    <button onClick={() => pageMain()}>click</button>
                    <button onClick={() => pageRespondents()}>click</button>
                    {console.log(page)}
                    <button className="btn_delete" onClick={() => deleteHandler(respondent.id)}/><br/>
                    {currentPage==='updaterespondent' ? <button className="btn_edit" onClick={() => setEditable(!editable)}/> : null}
                    {currentPage==='addrespondent' ? <button className="btn_confirm" onClick={() => confirmHandler({setNewRespondent, setAddedRespondent})} /> : null}
                </div> 
        </div>
    );
}