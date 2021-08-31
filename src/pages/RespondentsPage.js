import React, { useEffect, useState } from 'react';
import RespondentSingle from '../objects/RespondentSingle'
import FindAllRespondents from './fetches/FindAllRespondents';


export default function RespondentsPage({currentPage}) {
    const [error, setError] = useState(null);
    const [respondents, setRespondents] = useState([]);

    useEffect(() => {
        FindAllRespondents({setRespondents, setError});
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