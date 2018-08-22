import {} from '../config';
import { normalizeResponseErrors } from './utils';

export const GET_EVENT_REQUEST = 'GET_EVENT_REQUEST';
export const getEventRequest = () => ({
    type: GET_EVENT_REQUEST
});

export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
export const getEventSuccess = (event) => ({
    type: GET_EVENT_SUCCESS,
    event
});

export const GET_EVENT_ERROR = 'GET_EVENT_ERROR';
export const getEventError = err => ({
    type: GET_EVENT_ERROR,
    err
});

//will rewrite this call once server is up and running
// export const getEvent = () => (dispatch) => {
//     dispatch(getEventRequest());
//     console.log('getEvent fired', API_KEY)
//     const params = {
//         'countryCode': 'US',
//         'apikey': API_KEY,
//         'id': 'Z7r9jZ1Ae8AGe'
//     }
//     let url = new URL(`${EVENT_API_BASE_URL}`);
//     Object.keys(params).forEach(key => {
//         console.log(params[key]);
//         return url.searchParams.append(key, params[key])
//     })
//         return fetch(url, {
//             method: 'GET',
//             mode: 'cors',
//             'Content-Type': 'application/json'
//         })
//         .then(res => normalizeResponseErrors(res))
//         .then(res => res.json())
//         .then(event => dispatch(getEventSuccess(event)))
//         .catch(err => dispatch(getEventError(err)));
// };