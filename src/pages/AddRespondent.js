
import React, { useEffect, useState } from 'react';
import RespondentAdder from '../objects/RespondentAdder';
import AddingRespondent from './fetches/AddingRespondent';
import RespondentSingle from '../objects/RespondentSingle';

export default function AddRespondent () {

        const [values, setValues] = useState({
            gender: '', 
            age: 0,
            income: 0,
            kids: 0,
            ownHome: '',
            subscribe: '',
            segment: '',
        })

        const [newRespondent, setNewRespondent] = useState(null);

        function inputsHandler({e, values}) {
            setValues({...values, [e.target.name]: e.target.value});
        }

        function submitHandler({values}) {
            setNewRespondent(values);
        }

        useEffect(() => {
            if(newRespondent !== null) {
                AddingRespondent({newRespondent});
            }
        }, [newRespondent])

        return (
            <div className="mainBody">
                {newRespondent===null ? 
                <RespondentAdder submitHandler={submitHandler} inputsHandler={inputsHandler} values={values} /> 
                :<React.Fragment>
                    <h1>This respondent were added!</h1>
                    <RespondentSingle respondent={newRespondent}/>
                    <button className="btn_confirm" onClick={() => setNewRespondent(null)} />
                </React.Fragment>}
            </div>
        );
}
