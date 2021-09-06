
import UpdatingRespondent from '../pages/fetches/UpdatingRespondent';
import React, {useState} from 'react';

export default function RespondentEditer({respondent, setEditable, editable, setRespondent}) {

    const [inputs, setInputs] = useState(respondent);

    function onClickHandler() {
        UpdatingRespondent(inputs);
        setRespondent(inputs);
        setEditable(!editable);
    }

    function inputsChangeHandler(e) {
        e.preventDefault()
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    return (
        <div className="respondent"> 
        <div className="respondentpanel">
                <button className="btn_edit" onClick={() => setEditable(!editable)}/><br/>
                <button className="btn_confirm" onClick={() => onClickHandler()}/>
            </div>
                {Object.entries(inputs).map((object => 
                    <div className="editer" key={object[0]}> 
                        {object[0]!=='id' ? <>
                            <div className="respondentkeys"><b>{object[0].charAt(0).toUpperCase()+object[0].substring(1)}:</b></div>
                            <div className="respondentvalues"><input name={object[0]} type={typeof object[1]} value={object[1]} onChange={(e) => inputsChangeHandler(e)}/></div>
                            </> : 
                             <>
                             <div className="respondentkeys"><b>{object[0].charAt(0).toUpperCase()+object[0].substring(1)}:</b> {object[1]}</div>
                              <br/></>
                        }
                    </div>
                ))} 
        </div>
    );
}