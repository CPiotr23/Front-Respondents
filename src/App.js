import React, { useState } from 'react';
import Page from './objects/Page';
import Panel from './objects/Panel';


export default function App () {

    const [page, setPage] = useState('main')
    return (
        <div className="page">
        <Panel changeCurrentPage={page => setPage(page)}/> 
        <Page currentPage={page}/>
        </div>
    );
}
