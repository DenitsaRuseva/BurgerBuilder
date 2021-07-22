import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-a0acb-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;