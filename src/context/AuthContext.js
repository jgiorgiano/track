import {AsyncStorage} from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'signout':
            return { errorMessage: '', token: null}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        default:
            return state;
    }
}

const signup = (dispatch) => async ({email, password}) => {
    try {
        // console.log(response.data);
        const response = await trackerApi.post('/signup', {email, password});

        await AsyncStorage.setItem('token', response.data.token);

        dispatch({type: 'signin', payload: response.data.token});

        navigate('TrackList');

    } catch (e) {
        // console.log(e.message);
        dispatch({type: 'add_error', payload: 'Something went Wrong!'})
    }
}

const signin = (dispatch) => async ({email, password}) => {
    try {
        // console.log(response.data);
        const response = await trackerApi.post('/signin', {email, password});

        await AsyncStorage.setItem('token', response.data.token);

        dispatch({type: 'signin', payload: response.data.token});

        navigate('TrackList');

    } catch (e) {
        // console.log(e.message);
        dispatch({type: 'add_error', payload: 'Something went Wrong!'})
    }
}

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {

        dispatch({type: 'signin', payload: token});

        navigate('TrackList');

    } else {

        navigate('Signin');

    }
}


const clearErrorMessage = (dispatch) => () => {
    dispatch({type: 'clear_error_message'})
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');

    dispatch({ type: 'signout'});

    navigate('Signup');
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
);
