import React from 'react';
import Btn from './Btn';
import {Link} from 'react-router-dom';

function Panel(props) {
    return (
        <div className="panel">
            <Link to="/">
                <Btn changePageButton={(page='main') => props.changeCurrentPage(page)} 
                name={'Main page'}
                btnname={'btnshow'}/>
            </Link>
            <Link to="/respondents">
                <Btn changePageButton={(page='respondents') => props.changeCurrentPage(page)} 
                name={'Show respondents'}
                btnname={'btnreset'}/>
            </Link>
            <Link to="/add">
                <Btn changePageButton={(page='add') => props.changeCurrentPage(page)} 
                name={'Add Respondent'}
                btnname={'btnadd'}/>
            </Link>
            <Link to="/update">
                <Btn changePageButton={(page='update') => props.changeCurrentPage(page)} 
                name={'Update Respondent'}
                btnname={'btnupdate'}/>
            </Link>
        </div>
    );
}

export default Panel;