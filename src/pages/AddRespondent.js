
import axios from 'axios';
import React, { useState } from 'react';
import RespondentAdder from '../objects/RespondentAdder'

export default function AddRespondent () {

    const [respondent, setNewRespondent] = useState(
        {
            gender: 'Male',
            age: '18',
            income: '0',
            kids: '0',
            ownHome: 'ownNo',
            subscribe: 'subNo',
            segment: 'Suburb mix',
        }
    );

    function submitHandler(e) {
        e.preventDefault()
        axios
            .post("http://localhost:8080/respondents/add", respondent) 
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
    function changeHandler(e) {
        setNewRespondent({...respondent, [e.target.id]: e.target.value})
    }

    return (
        <RespondentAdder respondent={respondent} submitHandler={(e) => submitHandler(e)} changeHandler={(e) => changeHandler(e)}/>
    );
}
