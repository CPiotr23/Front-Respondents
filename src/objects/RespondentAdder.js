
export default function RespondentAdder({submitHandler, inputsHandler, values}) {

    return (
        <div className="mainBody"> 
            <div className="respondent">
                        <div className="respondentkeys">
                            {Object.keys(values).map(key => 
                            <><b key={key}>{key.charAt(0).toUpperCase()+key.substring(1)}</b>:<br/></>)}
                        </div>
                        <div className="respondentvalues">
                            {Object.entries(values).map(value => 
                            <><input onChange={(e) => inputsHandler(e)} name={value[0]} type={typeof(value[1])}/><br/></>)}
                        </div>
                        <br/><button onClick={() => submitHandler({values})}>Confirm</button>
            </div>
        </div>
);}