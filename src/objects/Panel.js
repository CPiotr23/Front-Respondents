import React from 'react';
import Btn from './Btn';
import {Link} from 'react-router-dom';
import { actionCreators } from '../state';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function Panel(props) {

    const page = useSelector((state) => state.page);
    const dispatch = useDispatch();
    const { pageMain, pageRespondents, pageAdd, pageUpdate } = bindActionCreators(actionCreators, dispatch);
    console.log(page);
    return (
        <div className="panel">
            <Link to="/">
                <Btn onClick={() => pageMain()}changePageButton={(page='main') => props.changeCurrentPage(page)} 
                name={'Main page'}
                btnname={'btnshow'}/>
            </Link>
            <Link to="/respondents">
                <Btn onClick={() => pageRespondents()} changePageButton={(page='respondents') => props.changeCurrentPage(page)} 
                name={'Show respondents'}
                btnname={'btnreset'}/>
            </Link>
            <Link to="/add">
                <Btn onClick={() => pageAdd()} changePageButton={(page='add') => props.changeCurrentPage(page)} 
                name={'Add Respondent'}
                btnname={'btnadd'}/>
            </Link>
            <Link to="/update">
                <Btn onClick={() => pageUpdate()} changePageButton={(page='update') => props.changeCurrentPage(page)} 
                name={'Update Respondent'}
                btnname={'btnupdate'}/>
            </Link>
        </div>
    );
}