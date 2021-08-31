import axios from 'axios';

export default function FindAllRespondents({setRespondents,setError}) {
    axios
        .get("http://localhost:8080/respondents/findAll")
        .then((response) => {
                setRespondents(response.data);
        })
        .catch((error) => {
            setError(error);
        });
}