import {
    createContext,
    useState
} from 'react';

export const AccountContext = createContext();

export const AccountProvider = (props) => {
    const [account, setAccount] = useState({
        name: 'Bli',
        age: 40
    });

    return ( 
        <AccountContext.Provider value={[account, setAccount]} > 
            {props.children}
        </AccountContext.Provider>
    )
}