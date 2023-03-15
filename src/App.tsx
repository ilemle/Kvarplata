
import { checkAuth } from './store/actionCreators.ts/authActions';
import { getUserTokens } from './utils/enctyptedStoraged';
import MainNavigator from './navigation'
import { useAppDispatch } from './hooks/redux';
import { useEffect } from 'react';
import { ITokens } from './interfaces/auth';
import FlashMessage from 'react-native-flash-message';

const App = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        let token: ITokens | null | undefined = null;
        const getToken = async () => {
            token = await getUserTokens()
        }
        getToken()
        if (token) {
            dispatch(checkAuth())
        }
    }, [])

    return <>
        <MainNavigator />
        <FlashMessage />
    </>
}

export default App