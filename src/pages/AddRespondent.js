
import React, { useEffect, useState } from 'react';
import RespondentAdder from '../objects/RespondentAdder';
import AddingRespondent from './fetches/AddingRespondent';
import RespondentSingle from '../objects/RespondentSingle';

export default function AddRespondent ({currentPage}) {

        const [values, setValues] = useState({
            gender: 'none', 
            age: 0,
            income: 0,
            kids: 0,
            ownHome: 'none',
            subscribe: 'none',
            segment: 'none',
        })

        const [newRespondent, setNewRespondent] = useState(null);
        const [addedRespondent, setAddedRespondent] = useState(null);

        function inputsHandler({e, values}) {
            setValues({...values, [e.target.name]: e.target.value});
        }

        function submitHandler({values}) {
            setNewRespondent(values);
        }

        function confirmHandler() {
            setNewRespondent(null);
            setAddedRespondent(null);
        }

        useEffect(() => {
            if(newRespondent !== null) {
                AddingRespondent({newRespondent, setAddedRespondent});
            }
        }, [newRespondent])

        return (
            <div className="mainBody">
                {addedRespondent===null ?
                <RespondentAdder submitHandler={submitHandler} inputsHandler={inputsHandler} values={values} /> 
                :<React.Fragment>
                    <h1>Confirm you want to add this Respondent or delete</h1>
                    <RespondentSingle respondent={addedRespondent} currentPage={currentPage} 
                    confirmHandler={confirmHandler} setNewRespondent={setNewRespondent} setAddedRespondent={setAddedRespondent}/>
                </React.Fragment>}
            </div>
        );
}
