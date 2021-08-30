import axios from "axios";

export default function AddingRespondent({respondent}) {
    axios
    .post("http://localhost:8080/respondents/add", respondent)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })    
}