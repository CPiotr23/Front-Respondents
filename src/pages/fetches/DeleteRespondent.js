import axios from 'axios';

export default function DeleteRespondent(id) {
        axios
            .delete("http://localhost:8080/respondents/delete/"+id)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
}