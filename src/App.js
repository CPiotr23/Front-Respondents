import React, { useState } from 'react';
import Panel from './objects/Panel';
import MainPage from './pages/MainPage';
import RespondentsPage from './pages/RespondentsPage';
import UpdateRespondent from './pages/UpdateRespondent';
import AddRespondent from './pages/AddRespondent';
import {Route, BrowserRouter  as Router} from 'react-router-dom';

export default function App () {

    const [page, setPage] = useState('main')

    return (
        <Router>
            <div className="page">
            {console.log(page)}
            <Panel changeCurrentPage={page => setPage(page)}/>
            {page==='main' ? <Route path="/" component={MainPage} /> : null}
            {page==='respondents' ? <Route path="/respondents" component={RespondentsPage} /> : null}
            {page==='update' ? <Route path="/update" component={UpdateRespondent} /> : null}
            {page==='add' ? <Route path="/add" component={AddRespondent} /> : null}
            </div>
        </Router>
    );
}
