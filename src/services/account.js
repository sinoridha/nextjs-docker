import request from '~/src/utils/request';
import to from 'await-to-js';


export const getUser = async(userId) => {
    return await to(request.default.get('http://localhost:3001/users/'+userId));
}

export const setUser = async(userId, setState) => {
    const [err, res] = await to(request.default.get('http://localhost:3001/users/1'));
    console.log('res', res.data)
    // console.log('setState', setState)
    
    setState(res.data);
}