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

const addCard = (data) => {
    axios.post('http://localhost:5000/cards', data)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error);
    })
}

export { getCards, addCard }