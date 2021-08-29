import React from 'react';
import MainPage from '../pages/MainPage';
import RespondentsPage from '../pages/RespondentsPage';
import AddRespondent from '../pages/AddRespondent';
import UpdateRespondent from '../pages/UpdateRespondent';
const baseURL = "http://localhost:8080/respondents";

function Page(props) {
    if(props.currentPage==='main'){
        return(
            <MainPage />
        );
    }
    if(props.currentPage==='listofrespondents'){
        return(
            <RespondentsPage baseURL={baseURL}/>
        );
    }
    if(props.currentPage==='addrespondent'){
        return(
            <AddRespondent baseURL={baseURL}/>
        );
    }
    if(props.currentPage==='updaterespondent'){
        return (
            <UpdateRespondent currentPage={props.currentPage} baseURL={baseURL} />
        );
    }
}

export default Page;