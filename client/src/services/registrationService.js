import axios from 'axios';

const registerUser = registrationData => {
    const url = 'http://192.168.99.100:8000/registerUser';

    return axios.post(url, {
        registrationData
    })
        .then(res => res)
        .catch(err => err)
};

export default registerUser;