import React from "react";

export default function RespondentAdder({submitHandler, inputsHandler, values}) {

    return (
            <div className="respondentAdder">
                        <div className="respondentkeys">
                            {Object.keys(values).map(key => 
                            <div className="inputkey" key={key}>
                                <b key={key}>{key.charAt(0).toUpperCase()+key.substring(1)}:</b><br/>
                            </div>)}
                        </div>
                        <div className="respondentvalues">
                            {Object.entries(values).map(value => 
                            <React.Fragment key={value[0]}><input onChange={(e) => inputsHandler({e, values})} name={value[0]} type={typeof(value[1])}/><br/></React.Fragment>)}
                        </div><br/>
                        <button onClick={() => submitHandler({values})}>Confirm</button>
            </div>
);}