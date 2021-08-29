
export default function RespondentAdder({respondent}) {

    return (
        <div className="respondent"> 
                <div className="respondentkeys">
                    {Object.keys(respondent).map(key => <><b>{key.charAt(0).toUpperCase()+key.substring(1)}</b>:<br/></>)}
                </div>
                <div className="respondentvalues">
                    {Object.values(respondent).map(value => <>{value}<br/></>)}
                </div>
                <div className="respondentpanel">
                    <button className="btn_delete"/><br/>
                    <button className="btn_edit"/><br/>
                    <button>b</button>
                </div>
        </div>
);}