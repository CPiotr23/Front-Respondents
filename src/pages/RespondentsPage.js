import React, { useEffect, useState } from 'react';
import RespondentSingle from '../objects/RespondentSingle'
import axios from 'axios'


export default function RespondentsPage({currentPage}) {
    const [error, setError] = useState(null);
    const [respondents, setRespondents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/respondents/findAll")
        .then((response) => {
        setRespondents(response.data);
        })
        .catch(function(error) {
            setError(error);
        });
    }, []);
   
    if(error){
        return (
          <div className="mainBody">
            Error
          </div>
        );
    }
    else {
        return (
            <div className="mainBody">
                {respondents.map(respondent => (
                    <RespondentSingle currentPage={currentPage} respondent={respondent} key={respondent.id}/>
                ))}
            </div>
        );
    }
}