
import UpdatingRespondent from '../pages/fetches/UpdatingRespondent';
import {useState} from 'react';

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
                <div className="respondentkeys">
                    {Object.keys(inputs).map(key => <><b key={key}>{key.charAt(0).toUpperCase()+key.substring(1)}</b>:<br/></>)}
                </div>
                <div className="respondentvalues">
                    {Object.entries(inputs).map(obj => 
                    <>{obj[0] !=='id' ? <input name={obj[0]} type={typeof obj[1]} value={obj[1]} onChange={(e) => inputsChangeHandler(e)}/> : obj[1]}<br/></>)}
                </div>
                <div className="respondentpanel">
                    <button className="btn_edit" onClick={() => setEditable(!editable)}/><br/>
                    <button className="btn_confirm" onClick={() => onClickHandler()}/>
                </div>
        </div>
    );
}