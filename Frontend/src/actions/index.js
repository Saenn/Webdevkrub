import {host} from '../config.json'
import axios from 'axios'

export const VIEW_CARD = "VIEW_CARD";
export const viewCard = (card) => {
    return{
        type : VIEW_CARD,
        payload : card
    }
}

export const announceCard = (card) => {
    return (dispatch) => {
        return axios.post(`${host}/announcecard`, {card})
          .then(response => {
            dispatch(addCardSuccess(response))
          })
          .catch(error => {
            throw(error);
          });
      };
}

export const CREATE_MEMBER = "CREATE_MEMBER"
export const createMember = (member) => {
    return (dispatch) => {
        return axios.post(`${host}/createmember`, {member})
          .then(response => {
            dispatch(createMemberSuccess(response))
          })
          .catch(error => {
            throw(error);
          });
      };
}

export const CALL_BACK = "CALL_BACK"
export const createMemberSuccess = (message) => {
    
    return{
        type : CALL_BACK,
        payload : message.data
    }
}

export const addCardSuccess = (message) => {    
    return{
        type : CALL_BACK,
        payload : {message}.message.data
    }
}

export const FETCH_CARD = "FETCH_CARD"
export const fetchCard = () =>{
    const url = host + '/getallcard';
    return (dispatch) => {
        return axios.post(url)
            .then(response => {
                dispatch(fetchCardSuccess(response));
            })
            .catch(error =>{
                throw(error);
            })
    }
}

export const fetchCardSuccess = (allcard) =>{ 
    return{
        type : FETCH_CARD,
        payload : allcard.data
    }
}

export const LOG_IN = "LOG_IN"
export const login = () => {
    return {
        type: LOG_IN
    }
}

export const LOG_OUT = "LOG_OUT"
export const logout = () => {
    return {
        type: LOG_OUT
    }
}


// export const SELECTED_ARTICLE = "SELECTED_ARTICLE";
// export const selectArticle = (article) =>{
//     return{
//         type : SELECTED_ARTICLE,
//         payload : {article}
//     }
// }