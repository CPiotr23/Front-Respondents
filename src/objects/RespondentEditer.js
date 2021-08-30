
import UpdatingRespondent from '../pages/fetches/UpdatingRespondent'

export default function RespondentEditer({respondent, setEditable, editable}) {

    function onClickHandler() {
        UpdatingRespondent(respondent);
        setEditable(!editable);
    }

    return (
        <div className="respondent"> 
                <div className="respondentkeys">
                    {Object.keys(respondent).map(key => <><b key={key}>{key.charAt(0).toUpperCase()+key.substring(1)}</b>:<br/></>)}
                </div>
                <div className="respondentvalues">
                    {Object.entries(respondent).map(obj => 
                    <>{obj[0] !=='id' ? <input type={typeof obj[1]}/> : obj[1]}<br/></>)}
                </div>
                <div className="respondentpanel">
                    <button className="btn_edit" onClick={() => setEditable(!editable)}/><br/>
                    <button className="btn_confirm" onClick={() => onClickHandler()}/>
                </div>
        </div>
    );
}