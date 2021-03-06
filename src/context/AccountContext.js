import {
    createContext,
    useState
} from 'react';

export const AccountContext = createContext();

export const AccountProvider = (props) => {
    const [account, setAccount] = useState({
        name: '',
        email: ''
    });

    return ( 
        <AccountContext.Provider value={[account, setAccount]} > 
            {props.children}
        </AccountContext.Provider>
    )
}