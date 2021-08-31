import axios from "axios";

export default function AddingRespondent({newRespondent, setAddedRespondent}) {
    axios
    .post("http://localhost:8080/respondents/add", newRespondent)
    .then(response => {
        setAddedRespondent(response.data);
    })
    .catch(error => {
        console.log(error);
    })    
}