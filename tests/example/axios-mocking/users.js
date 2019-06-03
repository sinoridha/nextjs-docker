import axios from 'axios';

class Users {

    static async all() {
        let res = await axios.get('http://localhost:3001/users');
        return res;
    }
}

module.exports = Users;
