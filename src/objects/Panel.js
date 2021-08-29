import React from 'react';
import Btn from './Btn';


function Panel(props) {
    return (
        <div className="panel">
            <Btn changePageButton={(page='main') => props.changeCurrentPage(page)} 
            name={'Main page'}
            btnname={'btnshow'}/>
            <Btn changePageButton={(page='listofrespondents') => props.changeCurrentPage(page)} 
            name={'Show respondents'}
            btnname={'btnreset'}/>
            <Btn changePageButton={(page='addrespondent') => props.changeCurrentPage(page)} 
            name={'Add Respondent'}
            btnname={'btnadd'}/>
            <Btn changePageButton={(page='updaterespondent') => props.changeCurrentPage(page)} 
            name={'Update Respondent'}
            btnname={'btnupdate'}/>
        </div>
    );
}

export default Panel;