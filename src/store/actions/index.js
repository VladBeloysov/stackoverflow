import {
    ACTIONS_QUESTION_SEARCH,
    ACTIONS_ANSWER_SEARCH, ACTIONS_SET_REW
} from '../../constants/actions';

import AppConfig from '../../config/appconfig';

export function setSearch(searchTerm) {
    const SEARCH_URL = `${AppConfig.SEARCH_URL.base_url}${searchTerm}${AppConfig.SEARCH_URL.filter}`;

    var x = new XMLHttpRequest();
    x.open("GET", SEARCH_URL, true);
    x.onload = function (){
        // alert( x.responseText);
        const res = JSON.parse(x.responseText);
        console.log(res);

    }
    x.send(null);
    return {
        type: ACTIONS_QUESTION_SEARCH,
        payload: '111'
    }
    // const SEARCH_URL = `${AppConfig.SEARCH_URL.base_url}${searchTerm}${AppConfig.SEARCH_URL.filter}`;
    // const SEARCH = axios.get(SEARCH_URL);

    // return {
    //     type: ACTIONS_QUESTION_SEARCH,
    //     payload: x.responseText
    // }
}

export function setAnswers(str) {
    //const SEARCH_URL = `${AppConfig.ANSWER_URL.base_url}${questionID}${AppConfig.ANSWER_URL.filter}`;
    //const SEARCH = axios.get(SEARCH_URL);
    return {
        type: ACTIONS_ANSWER_SEARCH,
        payload: str
    }
}