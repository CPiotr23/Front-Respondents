import axios from "axios";

export default function FindRespondent(props) {
    return (
        axios
        .get('http://localhost:8080/respondents/findById/'+props.id)
        .then(response => {
            if(response.data!=='') {
                props.setRespondent(response.data)
            }
            else {
                props.setRespondent(null)
            }
        })
        .catch(error => {
        console.log(error)
        }));
}