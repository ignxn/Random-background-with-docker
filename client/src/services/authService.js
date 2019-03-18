import axios from 'axios';

const authUser = authData => {
    const url = 'http://192.168.99.100:8000/authUser';

    return axios.post(url, {
        ...authData
    })
        .then(res => res)
        .catch(err => err)
};

export default authUser;