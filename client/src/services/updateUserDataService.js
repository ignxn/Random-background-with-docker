import axios from 'axios';

const updateUserData = data => {

    const url = 'http://192.168.99.100:8000/updateUserData';

    return axios.put(url, {
        data
    })
        .then(res => res)
        .catch(err => err)
};

export default updateUserData;