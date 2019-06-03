// http://zetcode.com/javascript/jest/
import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {

    const users = [{
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com"
    }, {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com"
    }];

    const resp = { data : users };

    axios.get.mockImplementation(() => Promise.resolve(resp));

    Users.all().then(resp => {
        expect(resp.data).toEqual(users)
    });
});
