import axios from 'axios'
export default function UpdatingRespondent (respondent) {
    return (
        axios
            .put('http://localhost:8080/respondents/update', respondent)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    )
}