import axios from 'axios'

const getCards = async () => {
    return await axios.get('http://localhost:5000/cards')
    .then(response => {
        console.log(response);
        return response.data
    })
    .catch(error => {
        console.log(error);
    })
}



export { getCards }