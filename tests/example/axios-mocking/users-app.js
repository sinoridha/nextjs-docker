// http://zetcode.com/javascript/jest/
import Users from './users';

async function showData() {
    let res = await Users.all();
    console.log(res.data);
}

showData();
console.log('finished')