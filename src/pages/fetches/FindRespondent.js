import axios from "axios";

export default function FindRespondent(props) {
    return (
        axios
        .get('http://localhost:8080/respondents/findById/'+props.id)
        .then(response => {
          props.setRespondent(response.data)
        })
        .catch(error => {
        console.log(error)
        }));
}