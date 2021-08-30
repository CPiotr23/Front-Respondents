import axios from "axios";

export default function AddingRespondent({newRespondent}) {
    axios
    .post("http://localhost:8080/respondents/add", newRespondent)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })    
}