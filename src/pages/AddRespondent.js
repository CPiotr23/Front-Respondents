
import React, { useState } from 'react';
import RespondentAdder from '../objects/RespondentAdder';
import AddingRespondent from './fetches/AddingRespondent';
import RespondentSingle from '../objects/RespondentSingle';

export default function AddRespondent () {
        
        const [values, setValues] = useState({name: '', age: ''})

        function inputsHandler(e) {
            setValues({...values, [e.target.name]: e.target.value});
            console.log(values);
        }

        function submitHandler({values}) {
            console.log(values);
        }

        return (
            <>
                <RespondentAdder submitHandler={submitHandler} inputsHandler={inputsHandler} values={values} />
            </>
        );
}
