const axios = require('axios');

const localhostOptions = {
    rejectUnauthorized: false,
    withCredentials: true,
    crossdomain: true
};

const remoteOptions = {
    rejectUnauthorized: false,
    withCredentials: false,
    crossdomain: false
};

const doLogin = (username, password) => {
    const url="http://localhost:5000/user/login";

    return new axios.post(url, {
                username: username,
                password: password
            },
            localhostOptions
    )
};

const doProjectList = () => {
        return new axios.get("http://localhost:5000/project", localhostOptions )
};


exports.doLogin =  doLogin;
exports.doProjectList = doProjectList;
