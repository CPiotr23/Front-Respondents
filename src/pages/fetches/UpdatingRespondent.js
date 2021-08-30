import axios from 'axios'
export default function UpdatingRespondent (respondent) {
    return (
        axios
            .put('http://localhost:8080/respondents/update', respondent)
            .fetch(response => {
                console.log('tak');
            })
            .catch(error => console.log(error))
    )
}